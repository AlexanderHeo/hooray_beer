import React from 'react';

const beer = props => (
  <tr>
    <td>{props.beer.name}</td>
    <td>{props.beer.brewery}</td>
    <td>{props.beer.rating}</td>
    <td>{props.beer.notes}</td>
    <td>{props.beer.bar}</td>
  </tr>
);

export default beer;
