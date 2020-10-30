/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import RatingDisplay from '../../ratingDisplay/RatingDisplay';

const smallBeer = props => {
  const rating = [];
  for (let i = 0; i < props.beer.rating; i++) {
    rating.push([i + 1]);
  }
  return (
    <TBODY>
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
          <div className="buttonContainer">
            <button
              type="submit"
              name="remove"
              className="removeButton"
              onClick={event => props.addBeerButtonClick(event, props.beer.beerID)}>Remove</button>
            <button
              type="submit"
              name="edit"
              className="editButton"
              onClick={event => props.addBeerButtonClick(event, props.beer.beerID)}>Edit</button>
          </div>
        </td>
      </tr>
    </TBODY>
  );
};

export default smallBeer;

const TBODY = styled.tbody`
	.firstRow {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	.name {
		font-size: 18px;
		font-weight: 600;
		display: flex;
		align-items: baseline;
	}
	.secondRow {
		display: flex;
		justify-content: space-between;
	}
	.brewery,
	.bar,
	.tastingNotes {
		font-size: 14px;
		color: rgb(118, 118, 118);
	}
	.note {
		font-size: 14px;
	}
	button {
		border-radius: 6px;
		width: 63px;
		padding: 3px 6px;
		margin: 0 6px;
		cursor: pointer;
		outline: none;
		font-size: 12px;
	}
	.removeButton {
		border: 1px solid rgb(255, 0, 0);
		color: rgb(80, 80, 80);
		background-color: rgb(255, 255, 255);
	}
	.removeButton:hover {
		border: 1px solid transparent;
		background-color: rgb(255, 0, 0);
		color: rgb(255, 255, 255);
		box-shadow: 0 2px 5px rgb(255, 0, 0);
	}
	.removeButton:active {
		box-shadow: inset -1px 1px 5px rgb(80, 80, 80);
		box-shadow: 0;
	}
	.editButton {
		border: 1px solid rgb(0, 255, 0);
		color: rgb(80, 80, 80);
		background-color: rgb(255, 255, 255);
	}
	.editButton:hover {
		border: 1px solid transparent;
		background-color: rgb(0, 255, 0);
		color: rgb(255, 255, 255);
		box-shadow: 0 2px 5px rgb(0, 255, 0);
	}
	.editButton:active {
		box-shadow: inset -1px 1px 5px rgb(80, 80, 80);
		box-shadow: 0;
	}
`;
