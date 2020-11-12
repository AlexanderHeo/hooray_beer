import React from 'react'
import styled from 'styled-components'
import BreweryTable from '../../ui/table/BreweryTable'
import LargeBrewery from './LargeBrewery'

const largeTable = props => (
  <BreweryTable>
    <Table>
      <tbody>
        {props.breweryList.map(brewery => {
          return <LargeBrewery
            brewery={brewery}
            key={brewery.breweryID}
          />
        })}
      </tbody>
    </Table>
  </BreweryTable>
)

export default largeTable

const Table = styled.table`
	width: 80%;
	border: 2px solid transparent;
	border-radius: 12px;
	box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
	padding: 10px 0;
	border-spacing: 2px 0;
	tr:nth-child(even) {
		background-color: rgb(200, 200, 200);
	}
	td {
		padding: 6px 12px;
	}
	.name {
		font-weight: 500;
	}
	.name,
	.location {
		text-transform: capitalize;
	}
`
