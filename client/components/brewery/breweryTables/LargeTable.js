/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import LargeBrewery from './LargeBrewery';

const largeTable = props => (
  <Table>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {props.breweryList.map(brewery => {
          return <LargeBrewery
            brewery={brewery}
            key={brewery.breweryID}
          />;
        })}
      </tbody>
    </table>
  </Table>
);

export default largeTable;

const Table = styled.div`
	display: flex;
	justify-content: center;
	margin: 24px 0;
	table {
		border: 2px solid transparent;
		border-radius: 12px;
		box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
		padding: 10px 0;
		width: 80%;
		tr:nth-child(even) {
			background-color: rgb(200, 200, 200);
	}
	}
	th {
		border-bottom: 2px solid;
		border-color: rgba(118, 118, 118);
		background-color: rgb(255, 255, 255);
	}
	th, td {
		padding: 6px 12px;
	}
	.name {
		font-weight: 500;
	}
`;
