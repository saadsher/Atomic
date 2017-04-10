import React, { Component, PropTypes } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

import { Label, Input, Block, Button } from 'components'

const Error = styled(Block)`
  margin: 0 0 0.5rem;
`
const Wrapper = styled.div`
  margin-bottom: 1rem;
  label {
    vertical-align: middle;
  }
`
const Bar = styled.div`
  display: flex;
  width: 100%;
  input {
    margin-right: 0.5em;
  }
`

@inject('ListingStore') 
@observer class Search extends Component {
  filter(e) {
    const store = this.props.ListingStore.ListingStore
    // console.log(store)
    if (e.which === 13) {
      this.props.action()
    } else {
      store.filter = e.target.value
    }
  }
  render() {
    // const store = ListingStore.ListingStore
    const inputProps = { id: name, name, type, invalid, 'aria-describedby': `${name}Error` }
    const { error, name, invalid, label, type, action, value } = this.props
    return (
      <Wrapper>
        {invalid && error &&
          <Error id={`${name}Error`} role="alert" palette="danger">
          {error}
          </Error>
        }
        {label && <Label htmlFor={inputProps.id}>{label}</Label>}
        <Bar>
          <Input placeholder='Search by postcode: eg. EN5 5XQ' value={value} onChange={this.filter.bind(this)} onKeyDown={this.filter.bind(this)} {...inputProps} />
          <Button onClick={action}>Search</Button>
        </Bar>
      </Wrapper>
    )
  }
}

Search.propTypes = {
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.func,
  value: PropTypes.string
}

Search.defaultProps = {
  type: 'text',
  invalid: false,
  value: ""
}

export default Search
