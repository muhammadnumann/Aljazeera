import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from 'pages/login'

export default {
  title: 'Pages/Login',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})

Default.args = {}

Default.parameters = {
  nextRouter: {
    query: {
      serverUrl: 'http://servertest.com',
    },
  },
}
