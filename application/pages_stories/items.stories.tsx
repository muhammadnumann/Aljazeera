import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from 'pages/items'
import { worker } from 'mocks/browser'
import { rest } from 'msw'
import { getFakeItems } from 'stubs/ItemMetadata.stubs'

export default {
  title: 'Pages/Items',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})

Default.parameters = {
  layout: 'fullscreen',
}

Default.decorators = [
  (Story) => {
    worker.use(
      rest.put(
        'http://localhost:6006/API/item/?content=metadata&number=10',
        (req, res, ctx) => {
          return res(ctx.json(getFakeItems()))
        },
      ),
    )

    return <Story />
  },
]

export const Loading = Template.bind({})
Loading.decorators = [
  (Story) => {
    worker.use(
      rest.put(
        'http://localhost:6006/API/item/?content=metadata&number=10',
        (req, res, ctx) => {
          return res(ctx.delay('infinite'))
        },
      ),
    )

    return <Story />
  },
]

Loading.parameters = {
  layout: 'fullscreen',
}
