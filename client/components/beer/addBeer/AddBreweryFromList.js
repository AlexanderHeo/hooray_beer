/* eslint-disable no-tabs */
/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';

const addBreweryFromList = props => {

  return (
		<AddBeerForm>
			<h4>Pick a brewery:</h4>
			<UL>
				{props.brewery.map(x => (
					<li
						key={x.breweryID}
						onClick={() => props.addBreweryFromList(x)}>{x.name}</li>
				))}
			</UL>
		</AddBeerForm>
	);
};

export default addBreweryFromList;

const AddBeerForm = styled.div`
	h4 {
		margin-top: 6px;
		margin-bottom: 0;
	}
`;

const UL = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin-top: 0;
	li {
		margin: 3px;
		width: 200px;
		padding: 6px 12px;
		cursor: pointer;
	}
	li:nth-child(odd) {
		background-color: rgb(188, 188, 188)
	}
`;
