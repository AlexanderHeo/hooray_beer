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
						addBeerButtonClick={(event, beer) => props.handleEditButton(event, beer)}/>
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
	th {
		border-bottom: 2px solid;
		border-color: rgb(118, 118, 118);
		background-color: rgba(255, 255, 255);
	}
	th, td {
		padding: 6px 12px;
	}
	th:first-of-type {
		border-top-left-radius: 12px;
	}
	th:last-of-type {
		border-top-right-radius: 12px;
	}
`;
