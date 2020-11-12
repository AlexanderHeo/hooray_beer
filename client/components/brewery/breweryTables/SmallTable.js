import React from 'react'
import styled from 'styled-components'
import BreweryTable from '../../ui/table/BreweryTable'
import SmallBrewery from './SmallBrewery'

const smallTable = props => (
  <BreweryTable>
    <Table>
      <tbody>
        {props.breweryList.map(brewery => (
          <SmallBrewery
            brewery={brewery}
            key={brewery.breweryID} />
        ))}
      </tbody>
    </Table>
  </BreweryTable>
)

export default smallTable

const Table = styled.table`
	width: 90%;
	border: 2px solid transparent;
	border-radius: 12px;
	box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
	padding: 10px 0;
	border-spacing: 0;
	tr:nth-child(3n+1) td {
		padding-top: 6px;
	}
	tr:nth-child(3n+3) td {
		padding-bottom: 6px;
	}
	tr:nth-child(6n+1),
	tr:nth-child(6n+2),
	tr:nth-child(6n+3) {
		background-color: rgb(200, 200, 200);
	}
	td {
		padding: 3px 12px;
	}
	.name,
	.location {
		text-transform: capitalize;
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
`
