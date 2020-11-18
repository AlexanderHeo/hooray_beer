import React from 'react'
import styled from 'styled-components'

const navigation = props => (
  <Navi>
    <ul>
      <li>
        <button
          className='listButton'
          onClick={() => props.setView('beerList')}>My Beers</button>
      </li>
      <li>
        <button
          className='addBeerButton'
          onClick={() => props.setView('add')}>Add New Beer</button>
      </li>
    </ul>
  </Navi>
)

export default navigation

const Navi = styled.div`
	padding: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	ul {
		list-style: none;
		display: flex;
		margin: 0;
		padding: 0;
		justify-content: flex-end;
	}
	button {
		cursor: pointer;
		padding: 6px 12px;
		margin: 0 6px;
		border: 2px solid transparent;
		outline: none;
		color: hsl(15, 86%, 30%);
	}
	.listButton {
		border: 2px solid hsl(15, 86%, 30%);
		background-color: transparent;
		border-radius: 6px;
	}
	.listButton:hover {
		border: 2px solid rgb(135, 206, 235);
		background-color: rgb(135, 206, 235);
		border-radius: 6px;
		color: rgb(0, 0, 255);
		box-shadow: 0 2px 5px rgb(135, 206, 235);
	}
	.listButton:active {
		box-shadow: inset -2px 2px 5px rgb(0, 0, 255);
	}
	.addBeerButton {
		border-radius: 6px;
		background-color: rgb(0, 144, 247);
		color: rgb(240, 240, 40);
		box-shadow: 0 2px 5px rgb(0, 0, 255);
	}
	.addBeerButton:hover {
		border: 2px solid rgb(0, 144, 247);
		background-color: rgb(255, 255, 255);

		color: rgb(0, 0, 255);
	}
	.addBeerButton:active {
		box-shadow: inset -1px 1px 5px rgb(0, 0, 255);
		box-shadow: 0;
	}
	@media (max-width: 597px) {
		button {
			font-size: 12px;
			padding: 3px 6px;
		}
	}
`
