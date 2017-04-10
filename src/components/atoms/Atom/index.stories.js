import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Atom from '.'

storiesOf('Atom', module)
  .add('default', () => (
    <Atom></Atom>
  ))
  .add('reverse', () => (
    <Atom reverse></Atom>
  ))
