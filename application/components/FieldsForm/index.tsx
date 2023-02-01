import React, { FunctionComponent, useEffect, useState } from 'react'
import { Divider } from 'antd'
import { useForm, useFieldArray, UseFormRegister } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { MetadataFieldDocument } from '@vidispine/types'
import TextField from 'components/TextField'
import SelectField from 'components/SelectField'
import CheckboxField from 'components/CheckboxField'
import { AddRow, DeleteOutline, Folder } from 'components/Icons'
import Typography from 'components/Typography'
import { metadatafield as api } from '@vidispine/vdt-api'
import Link from 'next/link'
import { useAmplitude } from 'utils/hooks/useAmplitude'
import { Api } from 'utils/Api'
import Breadcrumbs from 'components/Breadcrumbs'

type Props = {
  field: MetadataFieldDocument
}

type InputProps = {
  name: string
  label: string
  register: UseFormRegister<MetadataFieldDocument>
  error?: boolean
  errorMessage?: string
}

interface SelectProps extends InputProps {
  options: { value: string; label: string }[]
  onChange?: (value: string) => void
}

const schema = yup
  .object({
    name: yup.string().required(),
    type: yup.string().required(),
  })
  .required()

const fieldTypes = [
  { value: 'string', label: 'String', restriction: 'stringRestriction' },
  { value: 'integer', label: 'Integer', restriction: 'integerRestriction' },
  { value: 'float', label: 'Float', restriction: 'floatRestriction' },
  { value: 'boolean', label: 'Boolean' },
  { value: 'date', label: 'Date' },
  { value: 'timeCode', label: 'Time Code' },
  { value: 'date-noindex', label: 'Date (No Index)' },
  { value: 'date-sortable', label: 'Date (Sortable)' },
  {
    value: 'float-noindex',
    label: 'Float (No Index)',
    restriction: 'floatRestriction',
  },
  {
    value: 'float-sortable',
    label: 'Float (Sortable)',
    restriction: 'floatRestriction',
  },
  {
    value: 'integer-noindex',
    label: 'Integer (No Index)',
    restriction: 'integerRestriction',
  },
  {
    value: 'integer-sortable',
    label: 'Integer (Sortable)',
    restriction: 'integerRestriction',
  },
  {
    value: 'long-noindex',
    label: 'Long (No Index)',
    restriction: 'longRestriction',
  },
  {
    value: 'string-sortable',
    label: 'String (Sortable)',
    restriction: 'stringRestriction',
  },
  {
    value: 'string-exact',
    label: 'String (Exact)',
    restriction: 'stringRestriction',
  },
  {
    value: 'string-exact-sortable',
    label: 'String (Exact Sortable)',
    restriction: 'stringRestriction',
  },
  {
    value: 'string-noindex',
    label: 'String (No Index)',
    restriction: 'stringRestriction',
  },
  { value: 'boolean-noindex', label: 'Boolean (No Index)' },
  { value: 'timeCode-noindex', label: 'Time Code (No Index)' },
]

const fieldIndexes = [
  { value: 'index', label: 'Index' },
  { value: 'noindex', label: 'No Index' },
  { value: 'extend', label: 'Extend' },
]

const TextInput: FunctionComponent<InputProps> = ({
  name,
  label,
  register,
  error,
  errorMessage,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <label
        className="self-center justify-self-end text-xs text-gray-900 dark:text-grayDark-900"
        htmlFor={name}
      >
        {label}
      </label>
      <TextField
        id={name}
        className="col-span-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm block text-sm border-gray-200 rounded-md"
        register={register}
        error={error}
        errorText={errorMessage}
        type="text"
      />
    </div>
  )
}

const SelectInput: FunctionComponent<SelectProps> = ({
  name,
  label,
  register,
  error,
  errorMessage,
  options,
  onChange,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <label
        className="self-center justify-self-end text-xs text-gray-900 dark:text-grayDark-900"
        htmlFor={name}
      >
        {label}
      </label>
      <SelectField
        id={name}
        className="self-center col-span-2"
        onChange={onChange}
        register={register}
        error={error}
        errorText={errorMessage}
        options={options}
      />
    </div>
  )
}

const CheckBoxInput: FunctionComponent<InputProps> = ({
  name,
  label,
  register,
}) => {
  return (
    <div className="flex flex-row justify-end">
      <label
        className="self-center text-xs text-gray-900 dark:text-grayDark-900 mr-2"
        htmlFor={name}
      >
        {label}
      </label>
      <CheckboxField id={name} register={register} />
    </div>
  )
}

const isEmptyValue = (value: string | boolean | Object) => {
  if (Object.keys(value).length === 0) {
    return true
  }
  return value === '' || value === false
}

const removeEmptyValues = (fields: MetadataFieldDocument) => {
  const newFields = { ...fields }
  Object.keys(fields).forEach((key) => {
    if (fields[key] instanceof Object) {
      fields[key] = removeEmptyValues(fields[key])
    }
    if (isEmptyValue(fields[key])) {
      delete newFields[key]
    }
  })
  return newFields
}

const FieldsForm: FunctionComponent<Props> = (props) => {
  const [instrument] = useAmplitude()

  const field = props?.field
  const isAddMode = !field

  const [restriction, setRestriction] = useState('')

  const formOptions = { resolver: yupResolver(schema) }

  if (!isAddMode) {
    // @ts-ignore
    formOptions.defaultValues = field
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<MetadataFieldDocument>(formOptions)

  const {
    fields: valuesFields,
    append: appendValue,
    remove: removeValue,
  } = useFieldArray({ control, name: 'values.field' })

  const {
    fields: dataFields,
    append: appendData,
    remove: removeData,
  } = useFieldArray({ control, name: 'data' })

  useEffect(() => {
    appendValue({ key: '', value: '' })
    appendData({ key: '', value: '' })
  }, [appendValue, appendData])

  const onSubmit = async (data: MetadataFieldDocument) => {
    const metadataFieldDocument = removeEmptyValues(data)
    const fieldName: string | undefined = metadataFieldDocument.name?.trim()

    Api.fetch(api.updateMetadataField, {
      fieldName,
      metadataFieldDocument,
    }).then(() => {
      instrument('Edit Metadata Field', { fieldName: fieldName })
    })
  }

  const handleChangeSelect = (e: string) => {
    const fieldType = fieldTypes.filter((type) => type.value === e).pop()
    if (fieldType?.restriction) {
      setRestriction(fieldType.restriction)
    } else {
      setRestriction('')
    }
  }

  return (
    <>
      <Typography type="title">
        {isAddMode ? 'New Field' : 'Editing field'}
      </Typography>

      <Breadcrumbs
        segmentsRawText={[0]}
        replaceLabelSegments={[
          { segment: 0, value: 'Metadata Fields' },
          { segment: 1, value: isAddMode ? 'Add' : 'Edit' },
        ]}
        omitIndexList={[2]}
        icon={
          <Folder className="h-6 w-6 text-gray-600 dark:text-grayDark-600" />
        }
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-md bg-white dark:bg-grayDark-50 rounded px-8 pt-6 pb-8 mb-4"
      >
        <Divider
          className="dark:text-grayDark-900 dark:border-t-grayDark-900"
          orientation="left"
        >
          Main
        </Divider>
        <div className="w-full px-3 mb-6 md:mb-0 p-5">
          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-5">
                <TextInput
                  name="name"
                  label="Name*"
                  register={register}
                  error={errors.name?.message !== undefined}
                />
                <TextInput
                  name="defaultValue"
                  label="Default Value"
                  register={register}
                  error={errors.defaultValue?.message !== undefined}
                />
              </div>
              <div className="grid grid-cols-2 mt-5">
                <SelectInput
                  name="type"
                  label="Type*"
                  register={register}
                  error={errors.type?.message !== undefined}
                  onChange={handleChangeSelect}
                  options={fieldTypes}
                />
                <SelectInput
                  name="index"
                  label="Index"
                  register={register}
                  error={errors.index?.message !== undefined}
                  options={fieldIndexes}
                />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex flex-col gap-5">
                <CheckBoxInput
                  name={'system'}
                  label={'System'}
                  register={register}
                />
                <CheckBoxInput
                  name={'sortable'}
                  label={'Sortable'}
                  register={register}
                />
                <CheckBoxInput
                  name={'inheritance'}
                  label={'Inheritance'}
                  register={register}
                />
              </div>
            </div>
          </div>
        </div>
        <Divider
          className="dark:text-grayDark-900 dark:border-t-grayDark-900"
          orientation="left"
        >
          Constraint
        </Divider>
        <div className="w-full px-3 mb-6 md:mb-0 p-5 mt-5">
          <div className="grid grid-cols-3 gap-4 mr-[180px] mb-5">
            <TextInput
              name="constraint.dataset"
              label="Dataset"
              register={register}
              error={errors.constraint?.dataset?.message !== undefined}
            />
            <TextInput
              name="constraint.levelProperty"
              label="Level Property"
              register={register}
              error={errors.constraint?.levelProperty?.message !== undefined}
            />
            <TextInput
              name="constraint.levelValue"
              label="Level Value"
              register={register}
              error={errors.constraint?.levelValue?.message !== undefined}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mr-[180px] mb-5">
            <TextInput
              name="constraint.value"
              label="Value"
              register={register}
              error={errors.constraint?.value?.message !== undefined}
            />
            <TextInput
              name="constraint.parent"
              label="Parent"
              register={register}
              error={errors.constraint?.parent?.message !== undefined}
            />
            <TextInput
              name="constraint.validationGroup"
              label="Validation Group"
              register={register}
              error={errors.constraint?.validationGroup?.message !== undefined}
            />
          </div>
        </div>
        <Divider
          className="dark:text-grayDark-900 dark:border-t-grayDark-900"
          orientation="left"
        >
          Schema
        </Divider>
        <div className="w-full px-3 mb-6 md:mb-0 p-5">
          <div className="flex flex-row justify-start mb-5 ml-[100px]">
            <CheckBoxInput
              name={'schema.reference'}
              label={'Reference'}
              register={register}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mr-[180px]">
            <TextInput name="schema.name" label="Name" register={register} />
            <TextInput name="schema.min" label="Min" register={register} />
            <TextInput name="schema.max" label="Max" register={register} />
          </div>
        </div>
        <Divider
          className="dark:text-grayDark-900 dark:border-t-grayDark-900"
          orientation="left"
        >
          Values
          <button
            type={'button'}
            className="self-center rounded-full bg-indigo-600 text-white px-2 py-2 ml-4 text-lg"
            onClick={() => appendValue({ key: '', value: '' })}
          >
            <AddRow className={'w-4 h-4'} />
          </button>
        </Divider>
        <div className="w-full px-3 mb-6 md:mb-0 p-5">
          {valuesFields.map((item, i) => (
            <div
              key={`value-${i}`}
              className="grid grid-cols-3 gap-4 mr-[180px] mb-5"
            >
              <TextInput
                name={`values.field[${i}].key`}
                label="Key"
                register={register}
              />
              <TextInput
                name={`values.field[${i}].value`}
                label="Value"
                register={register}
              />

              <div className="grid grid-cols-1 pt-2">
                <button
                  type={'button'}
                  className="self-center rounded-full bg-indigo-600 text-white w-8 px-2 py-2 text-lg"
                  onClick={() => removeValue(i)}
                >
                  <DeleteOutline />
                </button>
              </div>
            </div>
          ))}
        </div>
        <Divider
          className="dark:text-grayDark-900 dark:border-t-grayDark-900"
          orientation="left"
        >
          Data
          <button
            type={'button'}
            className="self-center rounded-full bg-indigo-600 text-white px-2 py-2 ml-4 text-lg"
            onClick={() => appendData({ key: '', value: '' })}
          >
            <AddRow className={'w-4 h-4'} />
          </button>
        </Divider>
        <div className="w-full px-3 mb-6 md:mb-0 p-5">
          {dataFields.map((item, i) => (
            <div
              key={`data-${i}`}
              className="grid grid-cols-3 gap-4 mr-[180px] mb-5"
            >
              <TextInput
                name={`data[${i}].key`}
                label="Key"
                register={register}
              />
              <TextInput
                name={`data[${i}].value`}
                label="Value"
                register={register}
              />
              <div className="grid grid-cols-1 pt-2">
                <button
                  type={'button'}
                  className="self-center rounded-full bg-indigo-600 text-white w-8 px-2 py-2 text-lg"
                  onClick={() => removeData(i)}
                >
                  <DeleteOutline />
                </button>
              </div>
            </div>
          ))}
        </div>
        {restriction === 'floatRestriction' && (
          <div className="w-full px-3 mb-6 md:mb-0 p-5">
            <Divider
              className="dark:text-grayDark-900 dark:border-t-grayDark-900"
              orientation="left"
            >
              Float Restriction
            </Divider>
            <div className="grid grid-cols-3 gap-4 mr-[180px] mb-5">
              <TextInput
                name={'floatRestriction.minInclusive'}
                label="Min Inclusive"
                register={register}
              />
              <TextInput
                name={'floatRestriction.maxInclusive'}
                label="Max Inclusive"
                register={register}
              />
            </div>
          </div>
        )}
        {restriction === 'integerRestriction' && (
          <div className="w-full px-3 mb-6 md:mb-0 p-5">
            <Divider
              className="dark:text-grayDark-900 dark:border-t-grayDark-900"
              orientation="left"
            >
              Integer Restriction
            </Divider>
            <div className="grid grid-cols-3 gap-4 mr-[180px] mb-5">
              <TextInput
                name={'integerRestriction.minInclusive'}
                label="Min Inclusive"
                register={register}
              />
              <TextInput
                name={'integerRestriction.maxInclusive'}
                label="Max Inclusive"
                register={register}
              />
            </div>
          </div>
        )}
        {restriction === 'longRestriction' && (
          <div className="w-full px-3 mb-6 md:mb-0 p-5">
            <Divider
              className="dark:text-grayDark-900 dark:border-t-grayDark-900"
              orientation="left"
            >
              Long Restriction
            </Divider>
            <div className="grid grid-cols-3 gap-4 mr-[180px] mb-5">
              <TextInput
                name={'longRestriction.minInclusive'}
                label="Min Inclusive"
                register={register}
              />
              <TextInput
                name={'longRestriction.maxInclusive'}
                label="Max Inclusive"
                register={register}
              />
            </div>
          </div>
        )}
        {restriction === 'stringRestriction' && (
          <div className="w-full px-3 mb-6 md:mb-0 p-5">
            <Divider
              className="dark:text-grayDark-900 dark:border-t-grayDark-900"
              orientation="left"
            >
              String Restriction
            </Divider>
            <div className="grid grid-cols-3 gap-4 mr-[180px] mb-5">
              <TextInput
                name={'stringRestriction.minLength'}
                label="Min Length"
                register={register}
              />
              <TextInput
                name={'stringRestriction.maxLength'}
                label="Max Length"
                register={register}
              />
              <TextInput
                name={'stringRestriction.pattern'}
                label="Pattern"
                register={register}
              />
            </div>
          </div>
        )}
        <div className="w-full flex justify-end gap-5">
          <Link href={'/fields'} as={`/fields`}>
            <button
              type="button"
              disabled={isSubmitting}
              className="rounded-md bg-white border-gray-900 border-2 shadow-md disabled:text-gray-200 disabled:border-gray-200 text-gray-900 font-bold px-4 py-2 mt-5"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-green-800 shadow-md text-white disabled:bg-green-200 font-bold px-4 py-2 mt-5"
          >
            {isSubmitting && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Save
          </button>
        </div>
      </form>
    </>
  )
}

export { FieldsForm }
