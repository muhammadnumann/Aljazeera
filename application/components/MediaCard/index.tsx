import {
  useMemo,
  MouseEvent,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react'
import { parseMetadataType } from '@vidispine/vdt-js'
import { getMetadataTitle } from 'utils/MetadataUtils'
import MediaCardThumbnail from './MediaCardThumbnail'
import MediaCardContent from './MediaCardContent'
import MediaCardMoreDetails from './MediaCardMoreDetails'
import { ItemType } from '@vidispine/types'
import TimeAgo from 'timeago-react'
import { Api } from 'utils/Api'
import { getItemThumbnailSpriteSheet } from 'utils/vdt-api/item'
import AppContext from 'utils/contexts/AppContext'
const { XMLParser } = require('fast-xml-parser')

interface InputMetadataProp {
  flat: boolean
  arrayOnSingle: boolean
}

interface InputProps {
  itemType: ItemType
  onClick(itemType: ItemType, event: MouseEvent<HTMLDivElement>): void
  onRemoveItemClick: () => void
  parseMetadataOptions: InputMetadataProp
  primaryFieldName: () => string
  primaryFunction: ({ item_videoId, itemId }: MediaCardProp) => void
}

const MediaCard = (props: InputProps) => {
  const context = useContext(AppContext)
  const parser = useMemo(() => new XMLParser(), [])
  const { id, metadata: metadataType } = props.itemType
  const [spriteImage, setSpriteImage] =
    useState<HTMLImageElement | undefined>(undefined)
  const [arraySpriteImage, setArraySpriteImage] = useState([])
  const parsedMetadata = parseMetadataType(
    metadataType,
    props.parseMetadataOptions,
  )
  const primaryText = useMemo(
    () =>
      getMetadataTitle(
        props.primaryFieldName,
        props.primaryFunction,
        parsedMetadata,
        props.itemType,
        id,
      ) || id,
    [
      props.primaryFieldName,
      props.primaryFunction,
      parsedMetadata,
      props.itemType,
      id,
    ],
  )

  const getThumbnailSprite = useCallback(async () => {
    const response = await Api.fetch(getItemThumbnailSpriteSheet, {
      itemId: id,
    })
    const data = parser.parse(response.data)
    if (data.ThumbnailSpriteSheetDocument) {
      const sprite = new Image()
      sprite.src = data.ThumbnailSpriteSheetDocument.url
      sprite.onload = () => {
        setSpriteImage(sprite)
        setArraySpriteImage(data.ThumbnailSpriteSheetDocument.thumbnail)
      }
    }
  }, [id, parser])

  useEffect(() => {
    getThumbnailSprite()
  }, [id, getThumbnailSprite])

  const { item_airDate: itemAirDate, representativeThumbnailNoAuth } =
    parsedMetadata

  const bgImage = useMemo(() => {
    if (representativeThumbnailNoAuth) {
      return context.serverUrl + representativeThumbnailNoAuth
    }
    return ''
  }, [representativeThumbnailNoAuth, context.serverUrl])

  return (
    <div className="grid h-60 w-64 rounded-lg shadow-lg">
      <div
        className={'h-[140px] w-64 rounded-t-lg '}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <MediaCardThumbnail
          thumbnail={representativeThumbnailNoAuth}
          itemId={id}
          onClick={(event: MouseEvent<HTMLDivElement>) =>
            props.onClick(props.itemType, event)
          }
          spriteImage={spriteImage}
          thumbnailArray={arraySpriteImage}
        />
      </div>
      <div className="relative flex h-[100px] w-64 bg-gray-50 dark:bg-grayDark-50 rounded-b-lg border-t-[4px] border-t-orange-500">
        <MediaCardContent
          content={primaryText}
          slug={parsedMetadata.item_slug}
          className="self-center pl-4 -mt-4 text-[14px] text-gray-800 leading-[20px] font-semibold dark:text-white cursor-pointer"
          onClick={(event: MouseEvent<HTMLDivElement>) =>
            props.onClick(props.itemType, event)
          }
        />
        <TimeAgo
          className="absolute left-4 bottom-2 text-[14px] text-gray-700 dark:text-grayDark-400"
          datetime={itemAirDate}
        />
        <MediaCardMoreDetails
          content={primaryText}
          itemType={props.itemType}
          onRemoveItemClick={props.onRemoveItemClick}
        />
      </div>
    </div>
  )
}

export interface MediaCardProp {
  title: string
  itemId: string
  item_videoId: string
}

MediaCard.defaultProps = {
  itemType: {},
  primaryFieldName: undefined,
  primaryFunction: ({ item_videoId, itemId }: MediaCardProp) =>
    item_videoId || itemId,
  onClick: undefined,
  parseMetadataOptions: { flat: true, arrayOnSingle: false },
}

export default MediaCard
