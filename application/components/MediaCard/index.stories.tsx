import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'
import { getFakeMetaCardItemType } from 'stubs/ItemMetadata.stubs'

export default {
  title: 'Components/MediaCard',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})

Default.args = {
  itemType: getFakeMetaCardItemType(),
  parseMetadataOptions: { flat: true, arrayOnSingle: false },
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/z3UqTsgsPM9SS2793hfBEJ/AJD-MAM-UI?node-id=378%3A10145',
  },
}
