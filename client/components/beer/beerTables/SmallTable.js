/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import BeerTable from '../../ui/table/BeerTable';
import SmallBeer from './SmallBeer';

const smalltable = props => (
  <BeerTable>
    <Table>
      <tbody>
        {props.beerList.map(beer => (
          <SmallBeer
            beer={beer}
            key={beer.beerID}
            setView={props.setView}
            handleButtonClick={props.handleButtonClick}/>
        ))}
      </tbody>
    </Table>
  </BeerTable>
);

export default smalltable;

const Table = styled.table`
	width: 90%;
	td {
		padding: 1px 12px;
	}
	.firstRow {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	.name,
	.brewery,
	.bar {
		text-transform: capitalize;
	}
	.name {
		font-size: 18px;
		font-weight: 600;
		display: flex;
		align-items: baseline;
		padding-bottom: 3px;
	}
	.secondRow {
		display: flex;
		justify-content: space-between;
	}
	.brewery,
	.bar,
	.tastingNotes {
		font-size: 12px;
		color: rgb(118, 118, 118);
	}
	.note {
		font-size: 12px;
	}
	.buttonContainer {
		display: flex;
		justify-content: center;
		margin: 6px 0;
	}
	button {
		width: 63px;
		padding: 3px 6px;
		font-size: 12px;
	}
	.removeButton {
		border-width: 1px
	}
	.editButton {
		border-width: 1px;
	}
`;
