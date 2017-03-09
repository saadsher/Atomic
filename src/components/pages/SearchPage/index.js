import React from 'react'

import { PageTemplate, Header, Footer, Paragraph, Heading } from 'components'

const SearchPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>Search for houses and flats for sale across the UK</Heading>
    </PageTemplate>
  )
}

export default SearchPage
