import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'
import { getFakeItemMetadata } from 'stubs/ItemMetadata.stubs'

export default {
  title: 'Components/Item/Metadata',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})

Default.args = {
  itemType: getFakeItemMetadata(),
  isLoading: false,
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/z3UqTsgsPM9SS2793hfBEJ/AJD-MAM-UI?node-id=383%3A9836',
  },
}

export const Loading = Template.bind({})

Loading.args = {
  itemType: undefined,
  isLoading: true,
}
