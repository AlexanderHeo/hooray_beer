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
    <TR className="row">
      <td className="beer" rowSpan="4"><span className="beerName">{props.beer.name}</span><br/><span className="breweryName">{props.beer.brewery}</span><br/><span className="barName">@ {props.beer.bar}</span></td>
      <td className="note" rowSpan="4">{props.beer.note}</td>
      <td className="rating" rowSpan="1"><span className="ratingSpan">{rating.map(x => <RatingDisplay key={x[0]}/>)}</span></td>
    </TR>
    <tr></tr>
    <tr>
      <td rowSpan="1">
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
    <tr></tr>
  </>);
};

export default beer;

const TR = styled.tr`
	.beer {
		min-width: 180px;
	}
	.beerName {
		font-size: 18px;
		font-weight: 700;
	}
	.breweryName,
	.barName  {
		font-size: 12px;
	}
	.note {
		border-left: 2px solid rgb(118, 118, 118);
		border-right: 2px solid rgb(118, 118, 118);
	}
	.rating {
		min-width: 162px;
		border-bottom: 1px solid black;
	}
	.ratingSpan {
		display: flex;
		justify-content: center;
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
