/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import RatingDisplay from '../ratingDisplay/RatingDisplay';

const beer = props => {
  const rating = [];
  for (let i = 0; i < props.beer.rating; i++) {
    rating.push([i + 1]);
  }
  return (<>
    <TR>
      <td className="beer" rowSpan="4">
        <span className="beerName">{props.beer.name}</span>
        <span className="ratingSpan">{rating.map(x => <RatingDisplay key={x[0]}/>)}</span><br/>
        <span className="breweryName" onClick={() => props.setView('brewery')}>{props.beer.brewery}</span><br/>
        <span className="barName">@ {props.beer.bar}</span>
      </td>
      <td className="note" rowSpan="4"><span className="tastingNotes">Tasting Notes:</span>&nbsp;{props.beer.note}</td>
      <td className="buttons" rowSpan="4">
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
    </TR>
    <tr></tr>
    <tr></tr>
    <tr></tr>
  </>);
};

export default beer;

const TR = styled.tr`
	.beer {
		min-width: 240px;
	}
	.beerName {
		font-size: 28px;
		font-weight: 700;
		letter-spacing: 0.2px;
	}
	.breweryName {
		font-size: 16px;
		font-weight: 500;
		color: rgb(118, 118, 118);
		cursor: pointer;
	}
	.barName  {
		font-size: 16px;
		color: rgb(118, 118, 118);
	}
	.rating {
		min-width: 162px;
	}
	.ratingSpan {
		display: inline-flex;
		justify-content: center;
		margin-left: 6px;
	}
	.note {
		display: flex;
		justify-content: flex-start;
	}
	.tastingNotes {
		font-weight: 500;
		color: rgb(118, 118, 118);
	}
	.buttons {
		width: 208px;
		min-width: 208px;
		max-width: 208px;
	}
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
		color: rgb(80, 80, 80);
		background-color: rgb(255, 255, 255);
	}
	.editButton {
		border: 2px solid rgb(0, 255, 0);
		color: rgb(80, 80, 80);
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
