import React, { PropTypes } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'components'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    color: ${palette('grayscale', 2)};
    font-size: 1.25rem;
    &.active {
      color: ${palette('grayscale', 0)};
    }
  }
`

const PrimaryNavigation = inject('routingStore')(observer(({routingStore, ...props}) => {
  const { location, replace } = routingStore
  return (
    <Nav {...props}>
      <li><Link to="/search" onlyActiveOnIndex activeClassName="active" onClick={() => replace('/search')}>search</Link></li>
      <li><Link to="/featured" onlyActiveOnIndex activeClassName="active" onClick={() => replace('/featured')}>featured</Link></li>
      {/*<li>{location.pathname}</li>*/}
    </Nav>
  )
}))

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
