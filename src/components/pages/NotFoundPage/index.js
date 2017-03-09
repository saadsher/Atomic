import React from 'react'

import { PageTemplate, Header, Footer, Heading } from 'components'

const NotFoundPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>Requested page not found</Heading>
    </PageTemplate>
  )
}

export default NotFoundPage
