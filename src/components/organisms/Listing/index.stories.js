import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Listing } from 'components'

storiesOf('Listing', module)
  .add('default', () => (
    <Listing />
  ))
