import React from 'react'

const mediumBrewery = props => (
  <>
    <tr>
      <td className="firstRow"><span className="name">{props.brewery.name}</span><span className="location">{props.brewery.city}, {props.brewery.state}</span></td>
    </tr>
    <tr>
      <td className="link"><a href={props.brewery.link}>{props.brewery.link}</a></td>
    </tr>
  </>
)

export default mediumBrewery
