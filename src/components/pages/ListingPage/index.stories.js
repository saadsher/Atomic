import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ListingPage } from 'components'

storiesOf('ListingPage', module)
  .add('default', () => (
    <ListingPage />
  ))
