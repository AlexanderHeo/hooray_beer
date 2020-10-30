/* eslint-disable no-tabs */
/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';

const addBreweryFromList = props => {
	let BreweryList = (
		<AddBeerForm>
			<div className="form">
				<h4>Pick a brewery:</h4>
				<UL>
					{props.brewery.map(x => (
						<li
							key={x.breweryID}
							onClick={() => props.addBreweryFromList(x)}>{x.name}</li>
					))}
				</UL>
			</div>
		</AddBeerForm>
	);
	if (props.brewery.length === 0) {
		BreweryList = null;
	}
  return BreweryList;
};

export default addBreweryFromList;

const AddBeerForm = styled.div`
	text-align: center;
	border: 2px solid transparent;
	border-radius: 12px;
	padding: 12px 12px;
	margin: 24px;
	height: 300px;
	box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
	.form {
		height: 100%;
		overflow-y: scroll;
	}
	h4 {
		margin: 6px 0;
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
