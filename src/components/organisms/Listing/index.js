import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Block, Link } from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  & > * {
    margin: 1rem;
    width: calc(33.3% - 2rem);
    @media screen and (max-width: 640px) {
      width: calc(100% - 1rem);
    }
  }
`

const Listing = ({ data, ...props }) => {
  const heading = data.bedrooms + " bed " + data.type.toLowerCase() + " for sale"
  return (
    <div {...props}>
      <Grid>
        <img src={data.image} alt={heading} />
        <Block>
          <h3>{heading}</h3>
          <h2>£{data.price}</h2>
          <p>{data.desc}</p>
        </Block>
        <Block>
          <img src={data.logo} alt={data.agent} />
          <p>{data.agent}</p>
          <p>{data.address}</p>
          <p>{data.tel}</p>
        </Block>
      </Grid>
    </div>
  )
}

Listing.propTypes = {
  data: PropTypes.object
}

export default Listing
