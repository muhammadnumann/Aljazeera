import React from 'react'
import { rest } from 'msw'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from 'pages/items/[dayOfWeek]/[itemId]'
import { worker } from 'mocks/browser'
import { getFakeItem } from 'stubs/ItemMetadata.stubs'

export default {
  title: 'Pages/Item',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})

Default.parameters = {
  nextRouter: {
    query: {
      itemId: 'VX-60',
    },
  },
  layout: 'fullscreen',
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/z3UqTsgsPM9SS2793hfBEJ/AJD-MAM-UI?node-id=2%3A39',
  },
}

Default.decorators = [
  (Story) => {
    worker.use(
      rest.get(
        'http://localhost:6006/API/item/VX-60/?field=title,durationSeconds,mimeType,created,user,originalFilename&content=metadata,shape,uri,thumbnail&version=latest&noauth-url=true&methodType=AUTO',
        (req, res, ctx) => {
          return res(ctx.json(getFakeItem()))
        },
      ),
    )

    return <Story />
  },
]
