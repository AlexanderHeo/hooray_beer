/* eslint-disable no-tabs */
/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import LargeBeer from './LargeBeer';

const largeTable = props => (
	<Table>
		<table>
			<colgroup>
				<col style={{ width: '25%' }} />
				<col style={{ width: '50%' }} />
				<col style={{ width: '25%' }} />
			</colgroup>
			<tbody>
				{props.beerList.map(beer => (
					<LargeBeer
						beer={beer}
						key={beer.beerID}
						setView={props.setView}
						addBeerButtonClick={(event, beer) => props.handleButtonClick(event, beer)}/>
				))}
			</tbody>
		</table>
	</Table>
);

export default largeTable;

const Table = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 24px 0;
	tr:nth-child(8n+1),
	tr:nth-child(8n+2),
	tr:nth-child(8n+3),
	tr:nth-child(8n+4) {
		background-color: rgb(235, 235, 235);
	}
	table {
		border: 2px solid transparent;
		border-radius: 12px;
		box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
		padding: 10px 0;
		width: 80%;
		border-spacing: 2px 0;
	}
	td {
		padding: 6px 12px;
	}
	.beer {
		min-width: 220px;
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
	.buttons {
		width: 208px;
		min-width: 208px;
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
		.buttons {
			min-width: 104px;
			button {
				margin: 3px 0;
			}
		}
	}
`;
