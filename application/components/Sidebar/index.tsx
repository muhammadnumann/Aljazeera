import {
  Home,
  Folder,
  FolderOpen,
  Settings,
  Wrench,
  TextBulleted,
  Search,
  User,
  Team,
} from 'components/Icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAmplitude } from 'utils/hooks/useAmplitude'
import { Disclosure } from '@headlessui/react'
import { Restrict } from 'modules/permissions'
import Uploader from 'components/Uploader'
import LogOutIcon from 'components/Icons/logOut'
import {
  VIDISPINE_TOKEN_COOKIE,
  DEFAULT_COOKIE_OPTIONS,
} from 'utils/CookieUtils'
import { useCookies } from 'react-cookie'
import { useCallback, useEffect, useState } from 'react'

interface InputProps {
  /** Show/hide the sidebar */
  show: boolean
}

interface SidebarItemProps {
  href: string
  as: string
  label: string
  baseUrl?: string
  icon: JSX.Element | JSX.Element[]
}

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const SidebarItem = ({ href, as, label, icon }: SidebarItemProps) => {
  const [instrument] = useAmplitude()
  const router = useRouter()
  const firstSegment = href.split('/').pop() as string
  const currentRoute = href !== '/' && router.pathname.includes(firstSegment)
  const initialRoute = router.pathname === '/' && href === '/'

  return (
    <div
      className={
        initialRoute || currentRoute
          ? 'bg-blue-100 text-gray-900 dark:bg-grayDark-100 p-3'
          : 'p-3'
      }
    >
      <Link href={href} as={as}>
        <div
          className="flex cursor-pointer"
          onClick={() => instrument(`Menu Item Click`, { selectedItem: label })}
        >
          <div
            className={`pl-2 text-2xl ${
              initialRoute || currentRoute
                ? 'text-blue-700 dark:text-grayDark-700'
                : 'text-gray-700 dark:text-grayDark-700'
            }`}
          >
            {icon}
          </div>
          <span
            className={`pl-6 font-normal leading-[24px] text-[16px] ${
              initialRoute || currentRoute
                ? 'text-blue-700 dark:text-grayDark-700'
                : 'text-gray-900 dark:text-grayDark-900'
            }`}
          >
            {label}
          </span>
        </div>
      </Link>
    </div>
  )
}

const SidebarItemCollapsible = ({ href, label, icon }: SidebarItemProps) => {
  const router = useRouter()
  const [activeLink, setActiveLink] = useState(false)
  const [key, setKey] = useState(1)
  const [routeDay, setRouteDay] = useState('')
  const [dayLinks, setDayLinks] = useState<JSX.Element[]>([])

  const generateDayLinks = useCallback(() => {
    return daysOfWeek.map((day) => {
      const FolderIcon = () => {
        if (activeLink && day.toLowerCase() == routeDay) {
          return (
            <FolderOpen className="h-6 w-6 text-gray-700 dark:text-grayDark-700" />
          )
        }

        return (
          <Folder className="h-6 w-6 text-gray-700 dark:text-grayDark-700" />
        )
      }

      return (
        <Link
          key={day}
          href={'/aje/news-packages/[dayOfWeek]'}
          as={`/aje/news-packages/${day.toLowerCase()}`}
        >
          <a
            className={
              activeLink && day.toLowerCase() == routeDay
                ? 'rounded-l-lg flex items-center bg-gray-200 text-gray-900 dark:bg-grayDark-100 p-2 pb-1'
                : 'rounded-l-lg flex items-center p-2 pb-1'
            }
          >
            <FolderIcon />
            <span className="pl-2 font-normal leading-[24px] text-[16px] text-gray-900 dark:text-grayDark-800">
              {day}
            </span>
          </a>
        </Link>
      )
    })
  }, [activeLink, routeDay])

  useEffect(() => {
    if (router.isReady) {
      const firstSegment = href.split('/').pop() as string
      const currentRoute = href !== '/' && router.asPath.includes(firstSegment)
      const initialRoute = router.pathname === '/' && href === '/'

      setActiveLink(initialRoute || currentRoute)
      setKey(2)

      let linkDay = daysOfWeek.filter((day) => {
        const lday = day.toLowerCase()

        if (router.asPath.includes(lday)) {
          return day.toLowerCase()
        }
      })

      if (linkDay.length != 0) {
        setRouteDay(linkDay[0].toLowerCase())
      }

      setDayLinks(generateDayLinks())
    }
  }, [
    router.asPath,
    activeLink,
    routeDay,
    generateDayLinks,
    href,
    router.isReady,
    router.pathname,
  ])

  return (
    <div>
      <div className="p-3 pr-0">
        <Disclosure defaultOpen={activeLink} key={key}>
          <>
            <Disclosure.Button className="flex w-full rounded-lg px-2 text-left ">
              <div className="text-gray-900 dark:text-grayDark-800">{icon}</div>
              <span className="pl-6 font-normal leading-[24px] text-[16px] text-gray-900 dark:text-grayDark-800">
                {label}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="pl-4 pt-2 pb-1">
              <Disclosure defaultOpen={activeLink} key={key}>
                <>
                  <Disclosure.Button className="flex w-full rounded-lg px-1 text-left">
                    <Folder className="h-6 w-6 text-gray-700 dark:text-grayDark-700" />
                    <span className="pl-2 font-normal leading-[24px] text-[16px] text-gray-900 dark:text-grayDark-800">
                      News Packages
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-1 pb-2 pl-3 text-sm ">
                    {dayLinks}
                  </Disclosure.Panel>
                </>
              </Disclosure>
            </Disclosure.Panel>
          </>
        </Disclosure>
      </div>
    </div>
  )
}

const Sidebar = (props: InputProps) => {
  const [, , removeCookie] = useCookies([VIDISPINE_TOKEN_COOKIE])

  const doUserLogOut = () => {
    removeCookie(VIDISPINE_TOKEN_COOKIE, {
      ...DEFAULT_COOKIE_OPTIONS,
      path: '/',
    })
    window.location.href = '/login'
  }

  if (!props.show) {
    return <></>
  }
  return (
    <div
      className={`flex flex-col sticky justify-between bg-gray-100 dark:bg-grayDark-100 w-60 pt-4 bottom-0 top-[64px] border-r-3 border-t-2 border-gray-200 dark:border-grayDark-200 font-sans overflow-x-hidden overflow-y-hidden`}
    >
      <section>
        <div className="pl-5 pb-4 border-b-2 border-gray-200 dark:border-grayDark-200">
          <div className="flex">
            <div className="rounded-full border-4 border-blue-900 w-[24px] h-[24px]"></div>
            <label className="pl-2 text-[16px] font-bold text-gray-800 dark:text-grayDark-800">
              AJ Digital MAM
            </label>
          </div>
        </div>
        <ul>
          <li>
            <SidebarItem
              href={'/home'}
              as={'/home'}
              label={'Home'}
              icon={<Home className={'h-6 w-6'} />}
            />
          </li>
          <Restrict to="item_search, collection.read">
            <li>
              <SidebarItemCollapsible
                href={'/aje/news-packages'}
                as={'/aje/news-packages'}
                label={'AJE'}
                icon={
                  <Folder className="h-6 w-6 text-gray-700 dark:text-grayDark-700" />
                }
              />
            </li>
          </Restrict>
          <Restrict to="item_search, collection.read">
            <li>
              <SidebarItem
                href={'/dcs-video-library'}
                as={'/dcs-video-library'}
                label={'DCS Video Library'}
                icon={
                  <Folder className="h-6 w-6 text-gray-700 dark:text-grayDark-700" />
                }
              />
            </li>
          </Restrict>
          <Restrict to="administrator">
            <li>
              <SidebarItem
                href={'/settings'}
                as={'/settings'}
                label={'Settings'}
                icon={<Settings className={'h-6 w-6'} />}
              />
            </li>
          </Restrict>
          <Restrict to="job.read">
            <li>
              <SidebarItem
                href={'/jobviewer'}
                as={'/jobviewer'}
                label={'Job Viewer'}
                icon={<Wrench className={'h-6 w-6'} />}
              />
            </li>
          </Restrict>
          <Restrict to="log.read">
            <li>
              <SidebarItem
                href={'/logviewer'}
                as={'/logviewer'}
                label={'Log Viewer'}
                icon={<Search className={'h-6 w-6'} />}
              />
            </li>
          </Restrict>
          <Restrict to="user.read">
            <li>
              <SidebarItem
                href={'/users'}
                as={'/users'}
                label={'Users'}
                icon={<User className={'h-6 w-6'} />}
              />
            </li>
          </Restrict>
          <Restrict to="group.read">
            <li>
              <SidebarItem
                href={'/groups'}
                as={`/groups`}
                label={'Groups'}
                icon={<Team className={'h-6 w-6'} />}
              />
            </li>
          </Restrict>
          <Restrict to="metadata_field.read">
            <li>
              <SidebarItem
                href={'/fields'}
                as={`/fields`}
                label={'Metadata Fields'}
                icon={<TextBulleted className={'h-6 w-6'} />}
              />
            </li>
          </Restrict>
          <Restrict to="import">
            <li>
              <Uploader />
            </li>
          </Restrict>
          <li>
            <div
              className="border-gray-200 dark:border-grayDark-300 fixed bottom-0 border-t-2 w-[240px] bg-gray-100 dark:bg-grayDark-100"
              onClick={doUserLogOut}
            >
              <SidebarItem
                href={'/'}
                as={'/'}
                label={'Log Out'}
                icon={<LogOutIcon />}
              />
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Sidebar

Sidebar.defaultProps = {
  show: true,
}
