import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

import {
  PageTemplate,
  Header,
  Footer,
  Heading,
  Search
} from 'components'

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 20em;
  padding: 1em;
  h1 {
    text-align: center;
  }
`

const SearchPage = inject('routingStore','ListingStore')(observer(({routingStore, ListingStore, ...props}) => {
  const { push } = routingStore
  const store = ListingStore.ListingStore
  let queryString = '?postcode=' + store.filter
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Center>
        <Heading>Search for houses and flats for sale across the UK</Heading>
        <Search name="search" error="Enter a location and search (press Enter)" value={store.filter} 
        action={() => push({ pathname: '/results', search: queryString })}
        ></Search>
      </Center>
    </PageTemplate>
  )
}))

export default SearchPage
