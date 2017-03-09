import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage, SamplePage, NotFoundPage, ListingPage, SearchPage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ListingPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/listing" component={ListingPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/results" component={SamplePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes
