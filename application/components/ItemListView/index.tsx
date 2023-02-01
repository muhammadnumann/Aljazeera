import { ItemType } from '@vidispine/types'
import AppContext, { ContextProps } from '../../utils/contexts/AppContext'
import Image from 'next/image'
import { createColumnHelper } from '@tanstack/table-core'
import { ParsedItemType } from '../../types/ParsedItemType'
import { parseMetadataType } from '@vidispine/vdt-js'
import ReactTable from '../ReactTable'
import { useContext } from 'react'
import { useAmplitude } from '../../utils/hooks/useAmplitude'

interface ItemListViewInputProps {
  items: ItemType[]
  onListItemClick: (id: string) => void
}

const columnHelper = createColumnHelper<ParsedItemType>()

const formatFileSize = (size: number) => {
  return Number(size / 1024 ** 2).toFixed(2)
}

const formatTime = (value: string) => {
  if (!value) return ''

  let totalSeconds = parseInt(value, 10)
  let hours = Math.floor(totalSeconds / 3600)
  let minutes = Math.floor((totalSeconds - hours * 3600) / 60)
  let seconds = totalSeconds - hours * 3600 - minutes * 60

  let formattedHours = hours < 10 ? '0' + hours : hours + ''
  let formattedMinutes = minutes < 10 ? '0' + minutes : minutes + ''
  let formattedSeconds = seconds < 10 ? '0' + seconds : seconds + ''

  return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds
}

const parse = (itemType: ItemType) => {
  const parsedMetadata = parseMetadataType(itemType.metadata)

  let parsed = parsedMetadata['-INF_+INF']?.field as ParsedItemType
  parsed.size = 0

  if (itemType?.shape && itemType.shape.length > 0) {
    let shape = itemType.shape[0]

    if (
      shape.containerComponent?.file &&
      shape.containerComponent.file.length > 0
    ) {
      parsed.size = shape.containerComponent.file[0].size ?? 0
    }
  }

  return parsed
}

const getColumns = (context: ContextProps) => {
  return [
    columnHelper.accessor('representativeThumbnailNoAuth', {
      cell: (info) => {
        let url = context.serverUrl ? context.serverUrl + info.getValue() : ''

        if (!!info.getValue()) {
          return (
            <div className="pt-1">
              <Image
                src={url}
                className="rounded-md"
                alt=""
                unoptimized
                width={120}
                height={70}
              />
            </div>
          )
        }

        return <span className="block h-[50px]"></span>
      },
      header: () => <span>&nbsp;</span>,
      maxSize: 80,
      minSize: 80,
    }),
    columnHelper.accessor((row) => row.item_videoId, {
      id: 'item_videoId',
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor((row) => row.itemId, {
      id: 'itemId',
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Vidispine Id</span>,
    }),
    columnHelper.accessor((row) => row.durationSeconds, {
      id: 'durationSeconds',
      cell: (info) => <span>{formatTime(info.getValue())}</span>,
      header: () => <span>Duration</span>,
    }),
    columnHelper.accessor((row) => row.size, {
      id: 'size',
      cell: (info) => <span>{formatFileSize(info.getValue())}</span>,
      header: () => <span>Size (Mb)</span>,
    }),
    columnHelper.accessor(
      (row) =>
        !!row.originalWidth ? row.originalWidth + 'x' + row.originalHeight : '',
      {
        id: 'resolution',
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>Resolution</span>,
      },
    ),
    columnHelper.accessor((row) => row.item_airDate, {
      id: 'item_airDate',
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Air Date</span>,
    }),
    columnHelper.accessor((row) => row.mimeType, {
      id: 'mimeType',
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>File Type</span>,
    }),
    columnHelper.accessor((row) => row.originalVideoCodec, {
      id: 'originalVideoCodec',
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Codec</span>,
    }),
    columnHelper.accessor((row) => row.item_slug, {
      id: 'slug',
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Slug</span>,
    }),
  ]
}

const ItemListView = ({ items, onListItemClick }: ItemListViewInputProps) => {
  const parsedItems = items?.map((itemType: ItemType) => parse(itemType))

  const context = useContext(AppContext)

  const [instrument] = useAmplitude()

  return (
    <ReactTable
      columns={getColumns(context)}
      data={parsedItems}
      onClick={(id: string) =>
        instrument('Item Click', { itemId: id }, () => onListItemClick(id))
      }
    />
  )
}

export default ItemListView
