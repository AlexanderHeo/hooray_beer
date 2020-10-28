/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';

const addBreweryFromQuery = props => {
  return (
    <>
      <h4>Pick the correct brewery:</h4>
      <UL>
        {props.brewery.map(brewery => {
          return (
            <li
              key={brewery.id}
              onClick={() => props.addFromQuery(brewery)}
            >
              <div>{brewery.name}</div>
              <div>{brewery.city}, {brewery.state}</div>
            </li>);
        })}
      </UL>
    </>
  );
};

export default addBreweryFromQuery;

const UL = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin-top: 0;
	li {
		margin: 6px;
		width: 200px;
		padding: 6px 12px;
		cursor: pointer;
	}
	li:nth-child(odd) {
		background-color: rgb(188, 188, 188);
	}
`;
