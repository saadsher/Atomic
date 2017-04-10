import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import {
  HomePage,
  FeaturedPage,
  SearchPage,
  ResultPage,
  NotFoundPage
} from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={SearchPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/featured" component={FeaturedPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/results" component={ResultPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes
