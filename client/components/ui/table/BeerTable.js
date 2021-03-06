import React from 'react'
import styled from 'styled-components'

const beerTable = props => (
  <Table>
    {props.children}
  </Table>
)

export default beerTable

const Table = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 24px 0;
	tr:nth-child(8n+1),
	tr:nth-child(8n+2),
	tr:nth-child(8n+3),
	tr:nth-child(8n+4) {
		background-color: hsl(49, 100%, 96%);
	}
	table {
		border: 2px solid transparent;
		border-radius: 12px;
		box-shadow: 0 3px 5px hsl(15, 86%, 30%), 0 10px 25px hsl(42, 87%, 55%);
		padding: 10px 0;
		border-spacing: 2px 0;
	}
`
