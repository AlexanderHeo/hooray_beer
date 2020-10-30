/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import MediumBrewery from './MediumBrewery';

const mediumTable = props => (
  <Table>
    <table>
      <tbody>
        {props.breweryList.map(brewery => (
          <MediumBrewery
            brewery={brewery}
            key={brewery.breweryID} />
        ))}
      </tbody>
    </table>
  </Table>
);

export default mediumTable;

const Table = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 24px 0;
	tr:nth-child(4n+1),
	tr:nth-child(4n+2) {
		background-color: rgb(200, 200, 200);
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
		padding: 3px 12px;
	}
	.firstRow {
		display: flex;
		justify-content: space-between;
	}
	.name {
		font-weight: 500;
	}
	.location {
		color: rgb(118, 118, 118);
	}
	.location, .link {
		display: flex;
		justify-content: baseline;
		font-size: 14px;
	}
`;
