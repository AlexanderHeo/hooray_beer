/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import MediumBeer from './MediumBeer';

const mediumTable = props => {
  return (
    <Table>
      <table>
        <tbody>
          {props.beerList.map(beer => (
            <MediumBeer
              beer={beer}
              key={beer.beerID}
              setView={props.setView}
              addBeerButtonClick={(event, beer) => props.handleEditButton(event, beer)}/>
          ))}
        </tbody>
      </table>
    </Table>
  );
};

export default mediumTable;

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
		padding: 3px 12px;
	}
	.firstRow {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	.name {
		font-size: 18px;
		font-weight: 600;
		display: flex;
		align-items: baseline;
	}
	.secondRow {
		display: flex;
		justify-content: space-between;
	}
	.brewery,
	.bar,
	.tastingNotes {
		font-size: 14px;
		color: rgb(118, 118, 118);
	}
	.note {
		font-size: 14px;
	}
	button {
		border-radius: 6px;
		width: 63px;
		padding: 3px 6px;
		margin: 0 6px;
		cursor: pointer;
		outline: none;
		font-size: 12px;
	}
	.removeButton {
		border: 1px solid rgb(255, 0, 0);
		color: rgb(80, 80, 80);
		background-color: rgb(255, 255, 255);
	}
	.removeButton:hover {
		border: 1px solid transparent;
		background-color: rgb(255, 0, 0);
		color: rgb(255, 255, 255);
		box-shadow: 0 2px 5px rgb(255, 0, 0);
	}
	.removeButton:active {
		box-shadow: inset -1px 1px 5px rgb(80, 80, 80);
		box-shadow: 0;
	}
	.editButton {
		border: 1px solid rgb(0, 255, 0);
		color: rgb(80, 80, 80);
		background-color: rgb(255, 255, 255);
	}
	.editButton:hover {
		border: 1px solid transparent;
		background-color: rgb(0, 255, 0);
		color: rgb(255, 255, 255);
		box-shadow: 0 2px 5px rgb(0, 255, 0);
	}
	.editButton:active {
		box-shadow: inset -1px 1px 5px rgb(80, 80, 80);
		box-shadow: 0;
	}
`;
