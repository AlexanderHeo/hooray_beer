import React from 'react'
import styled from 'styled-components'
import BreweryTable from '../../ui/table/BreweryTable'
import MediumBrewery from './MediumBrewery'

const mediumTable = props => (
  <BreweryTable>
    <Table>
      <tbody>
        {props.breweryList.map(brewery => (
          <MediumBrewery
            brewery={brewery}
            key={brewery.breweryID} />
        ))}
      </tbody>
    </Table>
  </BreweryTable>
)

export default mediumTable

const Table = styled.table`
	border-spacing: 2px 0;
	border: 2px solid transparent;
	border-radius: 12px;
	box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
	padding: 10px 0;
	width: 80%;
	tr:nth-child(2n+1) td {
		padding-top: 12px;
	}
	tr:nth-child(2n+2) td {
		padding-bottom: 12px;
	}
	tr:nth-child(4n+1),
	tr:nth-child(4n+2) {
		background-color: rgb(200, 200, 200);
	}
	td {
		padding: 3px 12px;
	}
	.firstRow {
		display: flex;
		justify-content: space-between;
	}
	.name,
	.location {
		text-transform: capitalize;
	}
	.name {
		font-weight: 500;
	}
	.location {
		color: rgb(118, 118, 118);
		margin-left: 12px;
	}
	.location, .link {
		display: flex;
		justify-content: baseline;
		font-size: 14px;
	}
`
