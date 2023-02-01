/** @format */

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * Takes an URL String and removes query params and hash params
 *
 * @param url - The URL string
 * @returns The transformed URL string
 *
 */
const getPathFromUrl = (url: string): string => {
  return url.split(/[?#]/)[0]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getTransformedTitle = (
  title: string,
  index: number | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  replaceLabelSegments: any,
) => {
  let transformedTitle = getPathFromUrl(title)

  if (!!replaceLabelSegments) {
    for (let segment of replaceLabelSegments) {
      if (segment.segment === index && !!segment.value) {
        transformedTitle = segment.value
      }
    }
  }

  return transformedTitle
}

const replaceCharacterListIfExists = (
  index: number | undefined,
  transformedTitle: string | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  replaceCharacterList: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  replaceLabelSegments: any,
) => {
  for (let value of replaceCharacterList) {
    if (!!replaceLabelSegments && replaceLabelSegments.length > 0) {
      for (let segment of replaceLabelSegments) {
        if (segment.segment != index)
          transformedTitle = transformedTitle?.replaceAll(value.from, value.to)
      }
    } else {
      transformedTitle = transformedTitle?.replaceAll(value.from, value.to)
    }
  }

  return transformedTitle!
}

/**
 * Takes a breadcrumb title (from url path) and replaces
 * special chars to more readable chars
 *
 * @param title - The breadcrumb title
 * @param toUpperCase - Boolean to uppercase the title
 * @param replaceCharacterList - Array of objects with the character to replace and the replacement
 * @param transformLabel - Function to transform the label
 * @returns The transformed title or the result of the custom transformLabel function
 *
 */
const convertBreadcrumb = (
  title: string,
  toUpperCase: boolean | undefined,
  replaceCharacterList: Array<CharacterMap> | undefined,
  transformLabel?: ((title: string) => React.ReactNode) | undefined,
  replaceLabelSegments?: Array<ReplaceLabelSegmentProps> | null,
  index?: number,
): React.ReactNode => {
  let transformedTitle = getTransformedTitle(title, index, replaceLabelSegments)

  if (transformLabel) {
    return transformLabel(transformedTitle)
  }

  if (replaceCharacterList) {
    transformedTitle = replaceCharacterListIfExists(
      index,
      transformedTitle,
      replaceCharacterList,
      replaceLabelSegments,
    )
  }

  // decode for utf-8 characters and return ascii.
  return toUpperCase
    ? decodeURI(transformedTitle).toUpperCase()
    : decodeURI(transformedTitle)
}

export interface Breadcrumb {
  /** Breadcrumb title. Example: 'blog-entries' */
  breadcrumb: string

  /** The URL which the breadcrumb points to. Example: 'blog/blog-entries' */
  href: string
}

export interface CharacterMap {
  /** The source character or character pattern that should be replaced (e.g. 'ae') */
  from: string

  /** The replacement into which the character should be replaced. */
  to: string
}

export interface ReplaceLabelSegmentProps {
  segment: number
  value: string
}

export interface BreadcrumbsProps {
  /** If true, the default styles are used.
   * Make sure to import the CSS in _app.js
   * Example: true Default: false */
  useDefaultStyle?: boolean

  /** The title for the very first breadcrumb pointing to the root directory. Example: '/' Default: 'HOME' */
  rootLabel?: string | null

  /** Boolean indicator whether the root label should be omitted. Example: true Default: false */
  omitRootLabel?: boolean

  /** Boolean indicator if the labels should be displayed as uppercase. Example: true Default: false */
  labelsToUppercase?: boolean

  /** Array containing a list of specific characters that should be replaced in the label. This can be useful to convert special characters such as vowels. Example: [{ from: 'ae', to: 'ä' }, { from: '-', to: ' '}] Default: [{ from: '-', to: ' ' }] */
  replaceCharacterList?: Array<CharacterMap>

  /** A transformation function that allows to customize the label strings. Receives the label string and has to return a string or React Component */
  transformLabel?: (title: string) => React.ReactNode

  /** Array containing all the indexes of the path that should be omitted and not be rendered as labels. If we have a path like '/home/category/1' then you might want to pass '[2]' here, which omits the breadcrumb label '1'. Indexes start with 0. Example: [2] Default: undefined */
  omitIndexList?: Array<number>

  /** An inline style object for the outer container */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  containerStyle?: any | null

  /** Classes to be used for the outer container. Won't be used if useDefaultStyle is true */
  containerClassName?: string

  /** An inline style object for the breadcrumb list */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listStyle?: any | null

  /** Classes to be used for the breadcrumb list */
  listClassName?: string

  /** An inline style object for the inactive breadcrumb list item */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inactiveItemStyle?: any | null

  /** Classes to be used for the inactive breadcrumb list item */
  inactiveItemClassName?: string

  /** An inline style object for the active breadcrumb list item */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  activeItemStyle?: any | null

  /** Classes to be used for the active breadcrumb list item */
  activeItemClassName?: string

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any

  /** Indexes to be used to specify upper case segments */
  segmentsUppercase?: Array<number>

  /** Indexes to be used to specify raw text segments */
  segmentsRawText?: Array<number>

  replaceLabelSegments: Array<ReplaceLabelSegmentProps> | null
}

const defaultProps: BreadcrumbsProps = {
  useDefaultStyle: false,
  rootLabel: 'Home',
  omitRootLabel: true,
  labelsToUppercase: false,
  replaceCharacterList: [{ from: '-', to: ' ' }],
  transformLabel: undefined,
  omitIndexList: undefined,
  containerStyle: null,
  containerClassName: '',
  listStyle: null,
  listClassName: '',
  inactiveItemStyle: null,
  inactiveItemClassName: '',
  activeItemStyle: null,
  activeItemClassName: '',
  icon: null,
  segmentsUppercase: [],
  segmentsRawText: [],
  replaceLabelSegments: [],
}

/**
 * A functional React component for Next.js that renders a dynamic Breadcrumb navigation
 * based on the current path within the Next.js router navigation.
 *
 * Only works in conjunction with Next.js, since it leverages the Next.js router.
 *
 * By setting useDefaultStyle to true, the default CSS will be used.
 * The component is highly customizable by either custom classes or
 * inline styles, which can be passed as props.
 *
 * @param props - object of type BreadcrumbsProps
 * @returns The breadcrumb React component.
 */
const Breadcrumbs = ({
  useDefaultStyle,
  rootLabel,
  omitRootLabel,
  labelsToUppercase,
  replaceCharacterList,
  transformLabel,
  omitIndexList,
  containerStyle,
  containerClassName,
  listStyle,
  listClassName,
  inactiveItemStyle,
  inactiveItemClassName,
  activeItemStyle,
  activeItemClassName,
  icon,
  segmentsUppercase,
  segmentsRawText,
  replaceLabelSegments,
}: BreadcrumbsProps) => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb> | null>(null)

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: decodeURIComponent(path),
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <nav
      style={containerStyle}
      className={containerClassName + ' mt-5 pb-5 text-[13px]'}
      aria-label="breadcrumbs"
    >
      <ol
        style={listStyle}
        className={useDefaultStyle ? '_2jvtI ' : listClassName}
      >
        <div className="inline-flex">
          <div className="pl-1 pr-1 m-[-4px]">{!!icon && icon}</div>
          {!omitRootLabel && (
            <li
              style={inactiveItemStyle}
              className={inactiveItemClassName + ' float-left'}
            >
              <Link href="/">
                <a
                  className={
                    'relative text-grayDark-50 dark:text-gray-50 no-underline hover:text-gray-600 dark:hover:text-grayDark-600 '
                  }
                >
                  {convertBreadcrumb(
                    rootLabel || 'Home',
                    labelsToUppercase,
                    replaceCharacterList,
                    transformLabel,
                    replaceLabelSegments,
                    0,
                  )}
                </a>
              </Link>
              {' '}
            </li>
          )}

          {breadcrumbs.length >= 1 &&
            breadcrumbs.map((breadcrumb, i) => {
              if (
                !breadcrumb ||
                breadcrumb.breadcrumb.length === 0 ||
                (omitIndexList && omitIndexList.includes(i))
              ) {
                return
              }
              return (
                <li
                  key={breadcrumb.href}
                  className={
                    i === breadcrumbs.length - 1
                      ? activeItemClassName +
                      ' inline text-grayDark-50 dark:text-gray-50 '
                      : inactiveItemClassName +
                      ' inline text-grayDark-50 dark:text-gray-50 '
                  }
                  style={
                    i === breadcrumbs.length - 1
                      ? activeItemStyle
                      : inactiveItemStyle
                  }
                >
                  {omitRootLabel && i === 0 ? ' ' : ' / '}
                  {!segmentsRawText?.includes(i) && (
                    <Link href={breadcrumb.href}>
                      <a
                        className={
                          'hover:text-gray-600 dark:hover:text-grayDark-600 ' +
                          (segmentsUppercase?.includes(i)
                            ? 'uppercase'
                            : 'capitalize')
                        }
                      >
                        {convertBreadcrumb(
                          breadcrumb.breadcrumb,
                          labelsToUppercase,
                          replaceCharacterList,
                          transformLabel,
                          replaceLabelSegments,
                          i,
                        )}
                      </a>
                    </Link>
                  )}
                  {segmentsRawText?.includes(i) && (
                    <label
                      className={
                        segmentsUppercase?.includes(i)
                          ? 'uppercase'
                          : 'capitalize'
                      }
                    >
                      {convertBreadcrumb(
                        breadcrumb.breadcrumb,
                        labelsToUppercase,
                        replaceCharacterList,
                        transformLabel,
                        replaceLabelSegments,
                        i,
                      )}
                    </label>
                  )}
                </li>
              )
            })}
        </div>
      </ol>
    </nav>
  )
}

Breadcrumbs.defaultProps = defaultProps

export default Breadcrumbs
