/* eslint-disable no-tabs */
import React from 'react';
import BeerButtons from '../../navigation/buttons/BeerButtons';
import RatingDisplay from '../../ratingDisplay/RatingDisplay';

const smallBeer = props => {
  const rating = [];
  for (let i = 0; i < props.beer.rating; i++) {
    rating.push([i + 1]);
  }
  return (
    <>
      <tr>
        <td className="firstRow">
          <span className="name">{props.beer.name}</span>
          <span className="rating">{rating.map(x => <RatingDisplay key={x[0]}/>)}</span>
        </td>
      </tr>
      <tr>
        <td className="secondRow">
          <span className="brewery">{props.beer.brewery}</span>
          <span className="bar">@{props.beer.bar}</span>
        </td>
      </tr>
      <tr>
        <td>
          <span className="tastingNotes">Tasting Notes: </span>
          <span className="note">{props.beer.note}</span>
        </td>
      </tr>
      <tr>
        <td>
          <BeerButtons
            handleButtonClick={props.handleButtonClick}
            beer={props.beer}/>
        </td>
      </tr>
    </>
  );
};

export default smallBeer;
