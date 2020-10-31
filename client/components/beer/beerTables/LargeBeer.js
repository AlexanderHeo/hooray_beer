/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
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
        <Button>
          <button
            type="submit"
            name="remove"
            className="removeButton"
            onClick={event => props.addBeerButtonClick(event, props.beer.beerID)}>Remove</button>
          <button
            type="submit"
            name="edit"
            className="editButton"
            onClick={ event => props.addBeerButtonClick(event, props.beer) }>Edit</button>
        </Button>
      </td>
    </tr>
    <tr></tr>
    <tr></tr>
    <tr></tr>
  </>);
};

export default beer;

const Button = styled.div`
	display: flex;
	justify-content: center;
	button {
		border-radius: 6px;
		width: 80px;
		padding: 6px 12px;
		margin: 0 6px;
		cursor: pointer;
		outline: none;
	}
	.removeButton {
		border: 2px solid rgb(255, 0, 0);
		color: rgb(80, 80, 80);
		background-color: rgb(255, 255, 255);
	}
	.removeButton:hover {
		border: 2px solid transparent;
		background-color: rgb(255, 0, 0);
		color: rgb(255, 255, 255);
		box-shadow: 0 2px 5px rgb(255, 0, 0);
	}
	.removeButton:active {
		box-shadow: inset -1px 1px 5px rgb(80, 80, 80);
		box-shadow: 0;
	}
	.editButton {
		border: 2px solid rgb(0, 255, 0);
		color: rgb(80, 80, 80);
		background-color: rgb(255, 255, 255);
	}
	.editButton:hover {
		border: 2px solid transparent;
		background-color: rgb(0, 255, 0);
		color: rgb(255, 255, 255);
		box-shadow: 0 2px 5px rgb(0, 255, 0);
	}
	.editButton:active {
		box-shadow: inset -1px 1px 5px rgb(80, 80, 80);
		box-shadow: 0;
	}
	@media (max-width: 722px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
