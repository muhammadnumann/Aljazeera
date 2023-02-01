import { ViewGrid, AlignJustify } from 'components/Icons'
import IconButton from 'components/IconButton'
import { useAmplitude } from 'utils/hooks/useAmplitude'

interface MediaDisplaySelectorProps {
  displayCards: boolean
  setDisplayCards: (show: boolean) => void
}

const MediaDisplaySelector = ({
  displayCards,
  setDisplayCards,
}: MediaDisplaySelectorProps) => {
  const [instrument] = useAmplitude()

  // noinspection JSVoidFunctionReturnValueUsed
  return (
    <div className="rounded-lg flex p-1 mr-4 mb-3 justify-end">
      <div>
        <IconButton
          active={displayCards}
          onClick={() =>
            instrument(
              'Change Display Mode',
              { displayMode: 'cards' },
              setDisplayCards(true),
            )
          }
        >
          <ViewGrid className={'w-5 h-5'} />
        </IconButton>
      </div>

      <div>
        <IconButton
          active={!displayCards}
          onClick={() =>
            instrument(
              'Change Display Mode',
              { displayMode: 'table' },
              setDisplayCards(false),
            )
          }
        >
          <AlignJustify className={'w-5 h-5'} />
        </IconButton>
      </div>
    </div>
  )
}

export default MediaDisplaySelector
