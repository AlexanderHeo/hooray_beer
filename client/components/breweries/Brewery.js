import React from 'react';

const brewery = props => {
  const location = `${props.brewery.city}, ${props.brewery.state}`;
  return (
    <tr>
      <td>{props.brewery.name}</td>
      <td>{location}</td>
      <td><a href={props.brewery.link}>{props.brewery.link}</a></td>
    </tr>
  );
};

export default brewery;
