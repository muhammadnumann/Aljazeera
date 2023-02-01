import { VidispineApi } from '@vidispine/vdt-react'
import { DecoratorFn } from '@storybook/react'

export const withVidispineApi: DecoratorFn = (StoryFn) => {
  return (
    <VidispineApi
      token={'1234'}
      username={'admin'}
      serverUrl={'http://localhost:6006'}
    >
      <StoryFn />
    </VidispineApi>
  )
}
