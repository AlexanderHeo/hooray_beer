import React from 'react';
import RatingDisplay from '../ratingDisplay/RatingDisplay';

const beer = props => {
  const rating = [];
  for (let i = 0; i < props.beer.rating; i++) {
    rating.push([i + 1]);
  }
  return (
    <tr>
      <td>{props.beer.name}</td>
      <td>{props.beer.brewery}</td>
      <td>{rating.map(x => <RatingDisplay key={x[0]}/>)}</td>
      <td>{props.beer.note}</td>
      <td>{props.beer.bar}</td>
    </tr>
  );
};

export default beer;
