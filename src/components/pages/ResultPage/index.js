import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

import {
  PageTemplate,
  Header,
  Footer,
  Heading,
  Paragraph,
  Search,
  Listing
} from 'components'

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20em;
  padding: 1em;
`

const ResultPage = inject('routingStore','ListingStore')(observer(({routingStore, ListingStore, ...props}) => {
  const store = ListingStore.ListingStore
  const { push } = routingStore
  const initial = (store.filter === "")
  const zero = (store.size === 0)
  let size = store.size
  let results = store.results
  let queryString = '?postcode=' + store.filter
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Outer>
        {!initial && size > 0 && <Heading>Results for: {store.filter}</Heading>}
        {!initial && !size && <Heading>No results found</Heading>}
        <Search name="search" error="Enter another location and search again" value={store.filter} 
        action={() => push({ ...location, search: queryString })} />
        {!initial && size > 0 && <Paragraph>{size} results found</Paragraph>}
        {!initial && size > 0 && results.map((result) => <Listing key={result.id} data={result} />)}
      </Outer>
    </PageTemplate>
  )
}))

export default ResultPage
