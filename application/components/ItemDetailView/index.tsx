import { parseMetadataType } from '@vidispine/vdt-js'
import dynamic from 'next/dynamic'
import Typography from 'components/Typography'
import Breadcrumbs from 'components/Breadcrumbs'
import { Folder } from 'components/Icons'
import { Restrict } from 'modules/permissions'
import { ItemType } from '@vidispine/types'
import { useEffect, useState } from 'react'
import ItemMetadata, { TechnicalMetadata } from 'components/ItemMetadata'

// loading dinamically without ssr due errors during player rendering using nextjs
const ItemPlayer = dynamic(
  () => {
    return import('components/ItemPlayer')
  },
  { ssr: false },
)

type ItemDetailViewProps = {
  itemId: string | string[] | undefined
  itemType: ItemType
  isLoading: boolean
  onItemMetadataUpdate: () => void
}

const ItemDetailView = ({
  itemId,
  itemType,
  isLoading,
  onItemMetadataUpdate,
}: ItemDetailViewProps) => {
  const [title, setTitle] = useState<string>('')
  const [openTab, setOpenTab] = useState(1)
  useEffect(() => {
    const parsedMetadata = parseMetadataType(itemType.metadata, { flat: true })

    if (!!parsedMetadata) {
      setTitle(parsedMetadata.item_slug ?? itemType.id)
    }
  }, [itemType])

  return (
    <>
      <Typography type="title">Item</Typography>

      {title && (
        <Breadcrumbs
          segmentsUppercase={[0]}
          segmentsRawText={[0]}
          replaceLabelSegments={[{ segment: 3, value: title || '' }]}
          icon={
            <Folder className="h-6 w-6 text-gray-600 dark:text-grayDark-600" />
          }
        />
      )}
      {!title && <div className="h-12"></div>}

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
        <ItemPlayer itemId={itemId} itemType={itemType} isLoading={isLoading} />
        <div className="flex-wrap border-b">
          <div className="w-full">
            <ul
              className="flex flex-wrap flex-row border-b-[1px] border-white"
              role="tablist"
            >
              <li className="mr-12 text-center">
                <a
                  className={
                    'text-s font-medium	 px-1 pb-3 block leading-normal ' +
                    (openTab === 1
                      ? 'text-blue-900 dark:text-gray-100 bg-trans border-b-2 border-blue-900 dark:border-blue-900 -mb-[1px]'
                      : 'text-grayDark-1000 dark:text-gray-400 bg-trans')
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(1)
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Item Metadata
                </a>
              </li>
              <li className="mr-12 text-center">
                <a
                  className={
                    'text-s font-medium	 px-1 pb-3 block leading-normal ' +
                    (openTab === 2
                      ? 'text-blue-900 dark:text-gray-100 bg-trans border-b-2 border-blue-900 dark:border-blue-900 -mb-[1px]'
                      : 'text-grayDark-1000 dark:text-gray-400 bg-trans')
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(2)
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Technical Metadata
                </a>
              </li>
              <li className="mr-12 text-center">
                <a
                  className={
                    'text-s font-medium	 px-1 pb-3 block leading-normal ' +
                    (openTab === 3
                      ? 'text-blue-900 dark:text-gray-100 bg-trans border-b-2 border-blue-900 dark:border-blue-900 -mb-[1px]'
                      : 'text-grayDark-1000 dark:text-gray-400 bg-trans')
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(3)
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Thumbnail
                </a>
              </li>
            </ul>
          </div>
          <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-700 w-full mb-6 shadow-lg rounded mt-5">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Restrict to="metadata.write">
                    <ItemMetadata
                      itemId={itemId as string}
                      itemType={itemType}
                      isLoading={isLoading}
                      onItemMetadataUpdate={onItemMetadataUpdate}
                    />
                  </Restrict>
                </div>
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id="link1">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Restrict to="metadata.read">
                    <TechnicalMetadata
                      itemId={itemId as string}
                      itemType={itemType}
                      isLoading={isLoading}
                      onItemMetadataUpdate={onItemMetadataUpdate}
                    />
                  </Restrict>
                </div>
              </div>
              <div className={openTab === 3 ? 'block' : 'hidden'} id="link1">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p>thumbnail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetailView
