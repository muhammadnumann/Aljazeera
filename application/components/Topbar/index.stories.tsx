import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '.'

export default {
  title: 'Core/Topbar',
  component: Component,
  argTypes: {},
  parameters: {
    docs: {
      inlineStories: false,
      story: {
        iFrameHeight: 500,
      },
    },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/z3UqTsgsPM9SS2793hfBEJ/AJD-MAM-UI?node-id=378%3A9918',
  },
}
