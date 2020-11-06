/* eslint-disable no-tabs */
/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import BeerTable from '../../ui/table/BeerTable';
import LargeBeer from './LargeBeer';

const largeTable = props => (
	<BeerTable>
		<Table>
			<colgroup>
				<col style={{ width: '25%' }} />
				<col style={{ width: '55%' }} />
				<col style={{ width: '20%' }} />
			</colgroup>
			<tbody>
				{props.beerList.map(beer => (
					<LargeBeer
						beer={beer}
						key={beer.beerID}
						setView={props.setView}
						handleButtonClick={props.handleButtonClick}/>
				))}
			</tbody>
		</Table>
	</BeerTable>
);

export default largeTable;

const Table = styled.table`
	width: 80%;
	td {
		padding: 6px 12px;
	}
	.beer {
		min-width: 220px;
	}
	.beerName,
	.breweryName,
	.barName {
		text-transform: capitalize;
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
		justify-content: flex-start;
	}
	.note {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	.tastingNotes {
		font-weight: 500;
		color: rgb(118, 118, 118);
	}
	.buttonContainer, .button {
		display: flex;
		justify-content: center;
	}
	button {
		width: 80px;
		padding: 6px 12px;
	}
	.removeButton {
		border-width: 2px;
	}
	.editButton {
		border-width: 2px;
	}
	@media (max-width: 900px) {
		button {
			margin: 3px 0
		}
		.buttonContainer {
			align-items: center;
			flex-direction: column;
			min-width: 80px;
		}
	}
	@media (max-width: 722px) {
		.beer {
			min-width: 160px;
		}
		.beerName {
			font-size: 22px;
		}
		.breweryName,
		.barName,
		.tastingNotes,
		.note {
			font-size: 14px;
		}
	}
`;
