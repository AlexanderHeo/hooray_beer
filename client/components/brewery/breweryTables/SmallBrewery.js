import React from 'react'

const smallBrewery = props => {

  return (
    <>
      <tr>
        <td className="name">{props.brewery.name}</td>
      </tr>
      <tr>
        <td className="location">{props.brewery.city}, {props.brewery.state}</td>
      </tr>
      <tr>
        <td className="link"><a href={props.brewery.link}>{props.brewery.link}</a></td>
      </tr>
    </>
  )
}

export default smallBrewery
