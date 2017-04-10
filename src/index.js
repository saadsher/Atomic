import "babel-polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { AppContainer } from 'react-hot-loader'
  // import { createHistory } from 'history'
  // import { Router, useRouterHistory } from 'react-router'
import { Router, browserHistory } from 'react-router'
import routes from 'routes'
import ListingStore from 'components'

const routingStore = new RouterStore();

const stores = {
  routingStore: routingStore,
  ListingStore: ListingStore
};

const root = document.getElementById('app')
  // const history = useRouterHistory(createHistory)({ basename: process.env.PUBLIC_PATH })
const history = syncHistoryWithStore(browserHistory, routingStore)
const renderApp = () => (
  <AppContainer>
    <Provider {...stores}>
      <Router key={Math.random()} history={history} routes={routes} />
    </Provider>
  </AppContainer>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), root)
  })
}
