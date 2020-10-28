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
      <Rating>{rating.map(x => <RatingDisplay key={x[0]}/>)}</Rating>
      <td>{props.beer.note}</td>
      <td>{props.beer.bar}</td>
      <td>
        <Button>
          <button
            type="submit"
            name="remove"
            className="removeButton"
            onClick={ event => props.addBeerButtonClick(event, props.beer.beerID) }
            value="remove">Remove</button>
          <button
            type="submit"
            name="edit"
            className="editButton"
            onClick={ event => props.addBeerButtonClick(event, props.beer) }
            value="edit">Edit</button>
        </Button>
      </td>
    </tr>
  );
};

export default beer;
const Rating = styled.td`
	min-width: 162px;
`;
const Button = styled.div`
	display: flex;
	justify-content: center;
	button {
		border: 2px solid black;
		background-color: transparent;
		border-radius: 6px;
		width: 80px;
		padding: 6px 12px;
		margin: 0 6px;
		cursor: pointer;
	}
	.removeButton {
		border: 2px solid rgb(255, 0, 0);
		color: rgb(255, 0, 0);
		background-color: rgb(255, 255, 255);
	}
	.editButton {
		border: 2px solid rgb(0, 255, 0);
		color: rgb(0, 255, 0);
		background-color: rgb(255, 255, 255);
	}
	.removeButton:hover,
	.removeButton:active,
	.removeButton.active {
		border: 2px solid transparent;
		background-color: rgb(255, 0, 0);
		color: rgb(255, 255, 255);
	}
	.editButton:hover,
	.editButton:active,
	.editButton.active {
		border: 2px solid transparent;
		background-color: rgb(0, 255, 0);
		color: rgb(255, 255, 255);
	}
`;
