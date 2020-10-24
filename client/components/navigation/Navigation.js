/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';

const navigation = props => (
  <>
    <Navigation>
      <ul>
        <li>
          <button onClick={() => props.setView('beerList')}>My Beers List</button>
        </li>
        <li>
          <button onClick={() => props.setView('add')}>Add New Beer</button>
        </li>
        <li>
          <button onClick={() => props.setView('brewery')}>Breweries</button>
        </li>
      </ul>
    </Navigation>
  </>
);

export default navigation;

const Navigation = styled.div`
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
		background-color: rgb(255, 255, 255);
		cursor: pointer;
		padding: 6px 12px;
		margin: 0 6px;
		border-radius: 6px;
	}
	button:hover,
	button:active,
	button.active {
		background-color: rgb(50, 50, 50);
		color: rgb(188, 188, 188)
	}
`;
