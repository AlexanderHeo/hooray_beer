/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';

const searchBreweryFail = props => {
  return (
    <FailMessage>
      <div className="failContainer">
        <div>This isn&apos;t the brewery you are looking for.</div>
        <div>Please try again,</div>
        <div>there is no brewery by that name</div>
        <button className="return" onClick={() => props.setView('add')}>Return</button>
        <button className="beerList" onClick={() => props.setView('beerList')}>Beer List</button>
      </div>
    </FailMessage>
  );
};

export default searchBreweryFail;

const FailMessage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.failContainer {
		margin: 24px 0;
		padding: 24px 16px;
		border: 2px solid rgb(118, 118, 118);
		border-radius: 12px;
		text-align: center;
		box-shadow: 0 3px 5px rgb(80, 80, 80), 0 10px 25px rgb(120, 120, 120);
		div {
			margin: 12px 0;
		}
	}
	button {
		padding: 6px 12px;
		margin: 0 3px;
		border-radius: 6px;
	}
	.return {
		background-color: rgb(0, 255, 0);
	}
	.beerList {
		background-color: #fff897;
	}
`;
