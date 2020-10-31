/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import SmallBrewery from './SmallBrewery';

const smallTable = props => (
  <Table>
    <table>
      <tbody>
        {props.breweryList.map(brewery => (
          <SmallBrewery
            brewery={brewery}
            key={brewery.breweryID} />
        ))}
      </tbody>
    </table>
  </Table>
);

export default smallTable;

const Table = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 24px 0;
	tr:nth-child(6n+1),
	tr:nth-child(6n+2),
	tr:nth-child(6n+3) {
		background-color: rgb(200, 200, 200);
	}
	table {
		width: 90%;
		border: 2px solid transparent;
		border-radius: 12px;
		box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
		padding: 10px 0;
		border-spacing: 0;
	}
	td {
		padding: 3px 12px;
	}
	.name {
		font-weight: 500;
		font-size: 14px;
	}
	.location {
		color: rgb(118, 118, 118);
		padding: 3px 12px 0 12px;
	}
	.location, .link {
		font-size: 12px;
	}
`;
