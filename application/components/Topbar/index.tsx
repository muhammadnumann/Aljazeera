import React, { Fragment } from 'react'
import { ShowMenu, User, Search } from 'components/Icons'
import { Menu, Transition, Switch } from '@headlessui/react'
import { ThemeContext } from 'utils/contexts/ThemeContext'
import { useAmplitude } from 'utils/hooks/useAmplitude'

interface InputProps {
  /** Event to control show/hide sidebar behavior */
  onClickOnMenuItem(): void

  /** Show/hide search input field */
  showSearchInput?: boolean
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const Topbar: React.FC<InputProps> = (props) => {
  const { theme, setTheme } = React.useContext(ThemeContext)
  const [instrument] = useAmplitude()

  return (
    <div>
      <nav className="flex pt-2 pb-2 bg-gray-100 dark:bg-grayDark-100 fixed w-full h-[64px] z-10">
        <ul className="flex flex-1 items-center pr-5 justify-start">
          <li className="h-8 w-18 -mt-2 ml-2">
            <ShowMenu
              onClick={props.onClickOnMenuItem}
              className="fill-gray-700 dark:fill-grayDark-700 h-8 w-8 pt-2 cursor-pointer"
            />
          </li>
          <li className="h-8 w-18 -mt-2 ml-5 pt-1">
            {props.showSearchInput && (
              <div>
                <div>
                  <div className="relative">
                    <div className="absolute top-4 left-3">
                      <i className="fa fa-search text-gray-400 hover:text-gray-400"></i>
                    </div>
                    <input
                      className="h-8 pl-8 w-full rounded-lg z-0 bg-blue-600 dark:bg-gray-700 focus:shadow focus:outline-none placeholder-white text-sm"
                      placeholder="Search"
                    />
                    {
                      <div className="absolute top-1 left-2">
                        <button className="h-6 w-100 text-1xl text-black rounded-full">
                          <Search className="fill-white h-4 w-4" />
                        </button>
                      </div>
                    }
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>

        <Menu as="div" className="ml-3 mt-2 relative ">
          <div>
            <Menu.Button className="bg-gray-700 dark:bg-grayDark-700 p-1 mr-4 flex text-sm rounded-full focus:outline-none  focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open user menu</span>
              <User className="h-full w-[20px] fill-gray-100 dark:fill-grayDark-100 rounded-full mx-auto" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1
                border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-grayDark-300 ring-1 ring-white ring-opacity-5 focus:outline-none"
            >
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 dark:bg-gray-700' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    )}
                  >
                    <Switch.Group>
                      <Switch.Label className="pr-2 text-gray-800 dark:text-grayDark-900">
                        Dark Mode
                      </Switch.Label>
                      <Switch
                        checked={theme === 'dark'}
                        onChange={() => {
                          const newTheme = theme === 'dark' ? 'light' : 'dark'
                          instrument('Theme Change', { theme: newTheme }, () =>
                            setTheme(newTheme),
                          )
                        }}
                        className={`dark:bg-blue-600 bg-gray-200 relative inline-flex h-6 w-14 pl-2 items-center rounded-full`}
                      >
                        <span
                          className={`translate-x-6 dark:translate-x-0 inline-block h-4 w-4 transform rounded-full bg-white`}
                        />
                      </Switch>
                    </Switch.Group>
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </div>
  )
}

Topbar.defaultProps = {
  showSearchInput: false,
}

export default Topbar
