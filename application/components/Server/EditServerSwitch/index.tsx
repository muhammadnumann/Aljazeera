import { Switch } from '@headlessui/react'

interface InputProps {
  active: boolean
  onChange: (checked: boolean) => void
}

const EditServerSwitch = (props: InputProps) => {
  return (
    <Switch.Group>
      <Switch
        checked={props.active}
        onChange={props.onChange}
        className={`${
          props.active ? 'bg-blue-600' : 'bg-gray-200'
        }  relative inline-flex h-6 w-14 pl-2 items-center rounded-full mr-1 ml-[250px]`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${props.active ? 'translate-x-6' : 'translate-x-0'} 
                    inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </Switch>
      <Switch.Label className="text-gray-900 dark:text-gray-50">
        Edit
      </Switch.Label>
    </Switch.Group>
  )
}

export default EditServerSwitch
