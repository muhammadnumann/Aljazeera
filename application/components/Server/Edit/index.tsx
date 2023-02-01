import { Dispatch, SetStateAction, useState } from 'react'
import { urlIsValid } from 'utils/UrlUtils'
import TextField from 'components/TextField'

interface InputProps {
  /** Show/hide the component */
  visible: boolean

  /** Event triggered on server is added */
  onAddServer: (url: string) => void

  /** Event triggered on text change */
  onChange: Dispatch<SetStateAction<string>>
}

const EditServer = (props: InputProps) => {
  const [hasError, setHasError] = useState<boolean>(false)

  const onAddServer = (url: string) => {
    const isValid: boolean = urlIsValid(url)

    if (isValid) {
      props.onAddServer(url)
    }

    setHasError(!isValid)
  }

  return (
    <div>
      {props.visible && (
        <div>
          <TextField
            onChange={props.onChange}
            placeholder="Add Server"
            buttonLabel="+"
            error={hasError}
            errorText={'Invalid server address'}
            onButtonClicked={(url: string) => onAddServer(url)}
          />
        </div>
      )}
    </div>
  )
}

export default EditServer
