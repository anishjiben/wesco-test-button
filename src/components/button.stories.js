import React from 'react'
import WiscoButton from './button.jsx'
import { withKnobs, text } from '@storybook/addon-knobs'
export default { title: 'Button component', decorators: [withKnobs]}
export const button = () => {
  const message = text('Text', 'Click here now!')
  return <WiscoButton message={message}></WiscoButton>
}