import { parseMetadataType, parseShapeType } from '@vidispine/vdt-js'
import TextField from '../TextField'
import { ItemType, ShapeType } from '@vidispine/types'
import { useForm, UseFormRegister } from 'react-hook-form'
import { useAmplitude } from 'utils/hooks/useAmplitude'
import { item as ItemApi } from '@vidispine/vdt-api'
import { AxiosError, AxiosResponse } from 'axios'
import TextAreaField from 'components/TextAreaField'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { Edit } from 'components/Icons'

interface InputProps {
  /** ItemType to be displayed */
  itemType: ItemType

  /** Loading indicator */
  isLoading: boolean

  /** Id of selected item */
  itemId: string

  onItemMetadataUpdate: () => void
}

interface MetadataProps {
  name?: string

  register?: UseFormRegister<MetadataProps>
  /** Title of the item */
  title: string

  /** Value of the  item */
  value: string | number | ReadonlyArray<string> | undefined

  /** Loading indicator */
  isLoading?: boolean

  item_channel?: string

  item_broadcastCenter?: string

  item_shortDescription?: string

  item_slug?: string

  field?: string

  onChange?: (value: string) => void
}

const InputMetadata = (props: MetadataProps) => {
  return (
    <>
      <div className="self-center justify-self-end">
        <label
          className="text-xs text-gray-900 dark:text-grayDark-900"
          htmlFor={props.name}
        >
          {props.title}
        </label>
      </div>
      <div className="p-2">
        <TextField
          id={props.name}
          register={props.register}
          className="focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm text-sm border-gray-200 rounded-md"
          defaultValue={props.value}
          placeholder={''}
        />
      </div>
    </>
  )
}

const InputTextAreaMetadata = (props: MetadataProps) => {
  return (
    <>
      <div className="self-center justify-self-end">
        <label
          className="text-xs text-gray-900 dark:text-grayDark-900"
          htmlFor={props.name}
        >
          {props.title}
        </label>
      </div>
      <div className="px-2 pt-2">
        <TextAreaField
          id={props.name}
          register={props.register}
          className="focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm text-sm border-gray-200 rounded-md"
          defaultValue={props.value}
          onChange={props.onChange}
          placeholder={''}
        />
      </div>
    </>
  )
}

const ReadonlyMetadata = (props: MetadataProps) => {
  return (
    <>
      <div className="self-center justify-self-end">
        <label
          className="text-xs text-gray-900 dark:text-grayDark-900"
          htmlFor={props.name}
        >
          {props.title}
        </label>
      </div>
      <div className="p-2">
        <input
          readOnly
          type="text"
          id={`${props.title}-feild`}
          value={props.value}
          className="block h-9 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-grayDark-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer dark:bg-gray-700"
          placeholder=" "
        />
      </div>
    </>
  )
}

const ItemMetadata = ({ itemType, onItemMetadataUpdate }: InputProps) => {
  const [instrument] = useAmplitude()
  const router = useRouter()

  const [wordsCount, setWordsCount] = useState<number>(0)

  const parsedMetadata = useMemo(
    () => parseMetadataType(itemType.metadata, { flat: true }),
    [itemType.metadata],
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, dirtyFields },
  } = useForm<MetadataProps>({
    defaultValues: {
      title: '',
      item_channel: '',
      item_broadcastCenter: '',
      item_shortDescription: '',
      item_slug: '',
    },
  })

  const handleWordsCount = (e: string) => {
    const words = e.trim().split(' ')
    setWordsCount(words?.filter((word) => word !== '').length ?? 0)
  }

  useEffect(() => {
    const defaultValues = {
      title: parsedMetadata?.title?.pop() ?? '',
      item_channel: parsedMetadata?.item_channel?.pop() ?? '',
      item_broadcastCenter: parsedMetadata?.item_broadcastCenter?.pop() ?? '',
      item_shortDescription: parsedMetadata?.item_shortDescription?.pop() ?? '',
      item_slug: parsedMetadata?.item_slug?.pop() ?? '',
    }
    reset(defaultValues)
    handleWordsCount(defaultValues.item_shortDescription)
  }, [parsedMetadata, reset])

  const onRouteChangeStart = useCallback(() => {
    if (isDirty) {
      if (
        window.confirm(
          "There's metadata fields not saved, are you sure you want to leave and lose changes ?",
        )
      ) {
        return true
      }
      throw new Error("Abort route change by user's confirmation.")
    }
  }, [isDirty])

  useEffect(() => {
    router.events.on('routeChangeStart', onRouteChangeStart)

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart)
    }
  }, [onRouteChangeStart, router.events])

  // Get first shape type from metadata
  const getShape = (shape: Array<object>) => {
    return shape.length && shape.length > 0 ? shape[0] : null
  }

  const shapeType: ShapeType | null = itemType.shape
    ? getShape(itemType.shape)
    : null
  const shapeData = shapeType ? parseShapeType(shapeType) : null

  const onSubmit = async (metadataFields: MetadataProps) => {
    const updateField = metadataFields.field
    const fields: { name: string; value: [{ value: string }] }[] = []
    Object.keys(metadataFields).forEach((key) => {
      if (key === updateField) {
        fields.push({ name: key, value: [{ value: metadataFields[key] }] })
      }
    })

    const metadataDocument = {
      timespan: [
        {
          start: '-INF',
          end: '+INF',
          field: fields,
        },
      ],
    }

    await ItemApi.updateItemMetadata({
      itemId: itemType.id,
      queryParams: {
        onlyReturnChanges: false,
      },
      metadataDocument: metadataDocument,
    })
      .then((result: AxiosResponse) => {
        if (result.status === 200) {
          console.info('success')
          onItemMetadataUpdate()
          instrument(`Edit Item [${itemType.id}] Metadata Fields`, {
            fieldName: Object.keys(fields)
              .map((k) => k)
              .join(', '),
          })
        } else console.error(result)
      })
      .catch((error: AxiosError) => {
        console.error(JSON.stringify(error))
      })
  }

  return (
    <form>
      <div className="font-sans overflow-hidden w-full justify-self-center bg-gray-100 dark:bg-grayDark-100 pt-5 pb-5 rounded-lg">
        <div className="grid grid-cols-3 grid-rows-9 rounded-lg">
          <InputMetadata
            name="item_slug"
            register={register}
            title="Slug"
            value={parsedMetadata?.item_slug}
          />
          <div className="self-center">
            <button
              type="button"
              disabled={!dirtyFields.item_slug}
              onClick={handleSubmit((data) =>
                onSubmit({
                  ...data,
                  field: 'item_slug',
                }),
              )}
            >
              <Edit
                className={`ml-2 h-6 w-6 ${
                  dirtyFields.item_slug
                    ? 'text-green-1500'
                    : 'text-gray-700 dark:text-gray-400'
                }`}
              />
            </button>
          </div>

          <InputMetadata
            name="title"
            register={register}
            title="Title"
            value={parsedMetadata?.title}
          />
          <div className="self-center">
            <button
              type="button"
              disabled={!dirtyFields.title}
              onClick={handleSubmit((data) =>
                onSubmit({
                  ...data,
                  field: 'title',
                }),
              )}
            >
              <Edit
                className={`ml-2 h-6 w-6 ${
                  dirtyFields.title
                    ? 'text-green-1500'
                    : 'text-gray-700 dark:text-gray-400'
                }`}
              />
            </button>
          </div>

          <ReadonlyMetadata
            title="Original Filename"
            value={parsedMetadata?.originalFilename}
          />
          <div></div>

          <ReadonlyMetadata title="Duration" value={shapeData?.smpte} />
          <div></div>

          <ReadonlyMetadata title="MAM ID" value={itemType?.id} />
          <div></div>

          <InputMetadata
            name="item_channel"
            register={register}
            title="Channel"
            value={parsedMetadata?.item_channel}
          />
          <div className="self-center">
            <button
              type="button"
              disabled={!dirtyFields.item_channel}
              onClick={handleSubmit((data) =>
                onSubmit({
                  ...data,
                  field: 'item_channel',
                }),
              )}
            >
              <Edit
                className={`ml-2 h-6 w-6 ${
                  dirtyFields.item_channel
                    ? 'text-green-1500'
                    : 'text-gray-700 dark:text-gray-400'
                }`}
              />
            </button>
          </div>

          <InputMetadata
            name="item_broadcastCenter"
            register={register}
            title="Broadcast center"
            value={parsedMetadata?.item_broadcastCenter}
          />
          <div className="self-center">
            <button
              type="button"
              disabled={!dirtyFields.item_broadcastCenter}
              onClick={handleSubmit((data) =>
                onSubmit({
                  ...data,
                  field: 'item_broadcastCenter',
                }),
              )}
            >
              <Edit
                className={`ml-2 h-6 w-6 ${
                  dirtyFields.item_broadcastCenter
                    ? 'text-green-1500'
                    : 'text-gray-700 dark:text-gray-400'
                }`}
              />
            </button>
          </div>

          <InputTextAreaMetadata
            name="item_shortDescription"
            register={register}
            title="Short Description"
            onChange={handleWordsCount}
            value={parsedMetadata?.item_shortDescription}
          />
          <div className="self-center">
            <button
              type="button"
              disabled={
                !(dirtyFields.item_shortDescription && wordsCount <= 200)
              }
              onClick={handleSubmit((data) =>
                onSubmit({
                  ...data,
                  field: 'item_shortDescription',
                }),
              )}
            >
              <Edit
                className={`ml-2 h-6 w-6 ${
                  dirtyFields.item_shortDescription && wordsCount <= 200
                    ? 'text-green-1500'
                    : 'text-gray-700 dark:text-gray-400'
                }`}
              />
            </button>
          </div>
          <div></div>
          <div className="justify-self-end pr-2">
            <label
              className={`self-center justify-self-end text-xs ${
                wordsCount <= 200
                  ? 'text-gray-600 dark:text-grayDark-900'
                  : 'text-red-800'
              }`}
            >
              {`${wordsCount} words from 200 limit.`}
            </label>
          </div>
          <div></div>

          <ReadonlyMetadata
            title="Ingest Date"
            value={new Date(parsedMetadata?.created).toDateString()}
          />
          <div></div>

          <ReadonlyMetadata
            title="Frame Rate"
            value={
              shapeType?.videoComponent
                ? shapeType?.videoComponent[0]?.realBaseFrameRate?.numerator
                : ''
            }
          />
        </div>
      </div>
    </form>
  )
}

export const TechnicalMetadata = ({ itemType }: InputProps) => {
  const parsedItemMetadata = useMemo(
    () => parseMetadataType(itemType.metadata, { flat: true }),
    [itemType.metadata],
  )

  const { reset } = useForm<MetadataProps>({
    defaultValues: {
      title: '',
      item_channel: '',
      item_broadcastCenter: '',
      item_shortDescription: '',
    },
  })

  useEffect(() => {
    const defaultValues = {
      title: parsedItemMetadata?.title?.pop() ?? '',
      item_channel: parsedItemMetadata?.item_channel?.pop() ?? '',
      item_broadcastCenter:
        parsedItemMetadata?.item_broadcastCenter?.pop() ?? '',
      item_shortDescription:
        parsedItemMetadata?.item_shortDescription?.pop() ?? '',
    }
    reset(defaultValues)
  }, [parsedItemMetadata, reset])

  // Get first shape type from metadata
  const getShape = (shape: Array<object>) => {
    return shape.length && shape.length > 0 ? shape[0] : null
  }

  const shapeItemType = itemType.shape ? getShape(itemType.shape) : null
  const shapeItemData = shapeItemType ? parseShapeType(shapeItemType) : null

  return (
    <form>
      <div className="font-sans overflow-hidden w-full justify-self-center bg-gray-100 dark:bg-grayDark-100 pt-5 pb-5 rounded-lg">
        <div className="grid grid-cols-3 grid-rows-9">
          <ReadonlyMetadata
            title="Name"
            value={parsedItemMetadata?.originalFilename}
          />
          <div></div>

          <ReadonlyMetadata
            title="Original Filename"
            value={parsedItemMetadata?.originalFilename}
          />
          <div></div>

          <ReadonlyMetadata
            title="Slug"
            value={parsedItemMetadata?.item_slug}
          />
          <div></div>

          <ReadonlyMetadata
            title="Resolution"
            value={shapeItemData?.dimension}
          />
          <div></div>

          <ReadonlyMetadata title="Size (Mb)" value={shapeItemData?.fileSize} />
          <div></div>

          <ReadonlyMetadata
            title="File Type"
            value={parsedItemMetadata?.mimeType}
          />
          <div></div>

          <ReadonlyMetadata title="Codec" value={shapeItemData?.videoCodec} />
        </div>
      </div>
    </form>
  )
}

export default ItemMetadata
