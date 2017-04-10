import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

import {
  PageTemplate,
  Header,
  Footer,
  Heading,
  Listing
} from 'components'

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20em;
  padding: 1em;
`

const FeaturedPage = inject('ListingStore')(observer(({ListingStore, ...props}) => {
  const store = ListingStore.ListingStore
  const featured = store.featured
  let size = store.size
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Outer>
        <Heading>Featured properties</Heading>
        {size && featured.map((feature) => <Listing key={feature.id} data={feature} />)}
      </Outer>
    </PageTemplate>
  )
}))

export default FeaturedPage
