import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'
import { getFakeItemMetadata } from 'stubs/ItemMetadata.stubs'

export default {
  title: 'Components/Item/Player',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <div className="w-[700px]">
    <Component {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  itemType: getFakeItemMetadata(),
  itemId: 'VX-48',
  isLoading: false,
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/z3UqTsgsPM9SS2793hfBEJ/AJD-MAM-UI?node-id=378%3A9982',
  },
}
