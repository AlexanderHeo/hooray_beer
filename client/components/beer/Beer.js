/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
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
      <td>
        <Button>
          <button
            type="submit"
            name="remove"
            onClick={ event => props.addBeerButtonClick(event, props.beer.beerID) }
            value="remove">Remove</button>
          <button
            type="submit"
            name="edit"
            onClick={ event => props.addBeerButtonClick(event, props.beer) }
            value="edit">Edit</button>
        </Button>
      </td>
    </tr>
  );
};

export default beer;

const Button = styled.div`
	display: flex;
	justify-content: center;

	button {
		background-color: rgb(255, 255, 255);
		width: 80px;
		padding: 6px 12px;
		border-radius: 6px;
		margin: 0 6px;
		cursor: pointer;
	}
	button:hover,
	button:active,
	button.active {
		background-color: rgb(50, 50, 50);
		color: rgb(188, 188, 188)
	}
`;
