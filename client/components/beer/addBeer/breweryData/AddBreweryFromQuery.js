import React from 'react'
import styled from 'styled-components'

const addBreweryFromQuery = props => {
  return (
    <AddBreweryFromQuery>
      <div className="container">
        <h4>Pick the correct brewery:</h4>
        <UL>
          {props.brewery.map(brewery => {
            return (
              <li
                key={brewery.id}>
                <div>{brewery.name}</div>
                <div>{brewery.city}, {brewery.state}</div>
                <div className="button">
                  <button
                    onClick={() => props.addFromQuery(brewery)}>Choose</button>
                </div>
              </li>
            )
          })}
        </UL>
      </div>
    </AddBreweryFromQuery>
  )
}

export default addBreweryFromQuery

const AddBreweryFromQuery = styled.div`
	border: 2px solid transparent;
	border-radius: 12px;
	padding-bottom: 12px;
	margin: 24px;
	box-shadow: 0 2px 5px rgb(188, 188, 188), 0 10px 25px rgb(80, 80, 80);
	h4 {
		text-align: center;
		margin-block-start: 18px;
		margin-block-end: 18px;
	}
	.container {
		height: 400px;
		overflow-y: scroll;
	}
`;

const UL = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin: 0;
	li {
		width: 200px;
		padding: 12px 24px;
		cursor: pointer;
	}
	li:nth-child(odd) {
		background-color: rgb(188, 188, 188);
	}
	.button {
		text-align: center;
	}
	button {
		margin-top: 12px;
		padding: 6px 12px;
		border-radius: 6px;
		border-width: 2px;
		border-color: rgb(135, 206, 235);
		background-color: rgb(255, 255, 255);
	}
	button:hover {
		background-color: rgb(135, 206, 235);
	}
`
