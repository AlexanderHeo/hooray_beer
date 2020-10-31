/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';

const beerButtons = props => (
  <ButtonContainer className="buttonContainer">
    <button
      type="submit"
      name="remove"
      className="removeButton"
      onClick={event => props.handleButtonClick(event, props.beer.beerID)}>Remove</button>
    <button
      type="submit"
      name="edit"
      className="editButton"
      onClick={event => props.handleButtonClick(event, props.beer)}>Edit</button>
  </ButtonContainer>
);

export default beerButtons;

const ButtonContainer = styled.div`
	button {
		border-radius: 6px;
		margin: 0 6px;
		cursor: pointer;
		outline: none;
	}
	.removeButton {
		border-style: solid;
		border-color: rgb(255, 0, 0);
		background-color: rgb(255, 255, 255);
		color: rgb(80, 80, 80);
	}
	.removeButton:hover {
		background-color: rgb(255, 0, 0);
		color: rgb(255, 255, 255);
		box-shadow: 0 2px 5px rgb(255, 0, 0);
	}
	.removeButton:active {
		box-shadow: inset -1px 1px 5px rgb(80, 80, 80);
		box-shadow: 0;
	}
	.editButton {
		border-style: solid;
		border-color: rgb(0, 255, 0);
		background-color: rgb(255, 255, 255);
		color: rgb(80, 80, 80);
	}
	.editButton:hover {
		background-color: rgb(0, 255, 0);
		color: rgb(255, 255, 255);
		box-shadow: 0 2px 5px rgb(0, 255, 0);
	}
	.editButton:active {
		box-shadow: inset -1px 1px 5px rgb(80, 80, 80);
		box-shadow: 0;
	}
`;
