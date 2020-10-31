/* eslint-disable no-tabs */
import React from 'react';
import BeerButtons from '../../navigation/buttons/BeerButtons';
import RatingDisplay from '../../ratingDisplay/RatingDisplay';

const beer = props => {
  const rating = [];
  for (let i = 0; i < props.beer.rating; i++) {
    rating.push([i + 1]);
  }
  return (<>
    <tr>
      <td className="beer" rowSpan="4">
        <span className="beerName">{props.beer.name}</span>
        <br/>
        <span className="breweryName" onClick={() => props.setView('brewery')}>{props.beer.brewery}</span><br/>
        <span className="barName">@ {props.beer.bar}</span>
      </td>
      <td className="note" rowSpan="4">
        <span className="ratingSpan">{rating.map(x => <RatingDisplay key={x[0]}/>)}</span>
        <span className="tastingNotes">Tasting Notes:</span>&nbsp;{props.beer.note}</td>
      <td className="buttons" rowSpan="4">
        <BeerButtons
          handleButtonClick={props.handleButtonClick}
          beer={props.beer}/>
      </td>
    </tr>
    <tr></tr>
    <tr></tr>
    <tr></tr>
  </>);
};

export default beer;
