import React from 'react';
import RatingDisplay from '../newBeer/RatingDisplay';

const beer = props => {
  return (
    <tr>
      <td>{props.beer.name}</td>
      <td>{props.beer.brewery}</td>
      <td>{
        props.beer.rating.map(x => <RatingDisplay key={x} />)}</td>
      <td>{props.beer.notes}</td>
      <td>{props.beer.bar}</td>
    </tr>
  );
};

export default beer;
