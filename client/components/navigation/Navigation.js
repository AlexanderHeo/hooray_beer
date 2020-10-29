/* eslint-disable no-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';

class Navigation extends Component {
	state = {
	  beerActive: true,
	  breweryActive: false
	}

	setView = button => {
	  const beerCurrentState = this.state.beerActive;
	  const breweryCurrentState = this.state.breweryActive;
	  if ((button === 'beerList' && !this.state.beerActive) || (button === 'brewery' && !this.state.breweryActive)) {
	    this.setState({
	      beerActive: !beerCurrentState,
	      breweryActive: !breweryCurrentState
	    });
	    this.props.setView(button);
	  } else if (button === 'add') {
	    this.props.setView(button);
	  }
	}

	render() {
	  return (
	    <Navi>
	      <ul>
	        <li>
	          <button
	            className={['listButton', this.state.beerActive].join(' ')}
	            onClick={() => this.setView('beerList')}>My Beers</button>
	        </li>
	        <li>
	          <button
	            className={['listButton', this.state.breweryActive].join(' ')}
	            onClick={() => this.setView('brewery')}>My Breweries</button>
	        </li>
	        <li>
	          <button
	            className="addBeerButton"
	            onClick={() => this.setView('add')}>Add New Beer</button>
	        </li>
	      </ul>
	    </Navi>
	  );
	}
}

export default Navigation;

const Navi = styled.div`
padding: 0;
display: flex;
flex-direction: column;
width: 100%;
	.true {
		border-bottom: 2px solid rgb(135, 206, 235);
	}
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
	}
	.listButton {
		background-color: rgb(255, 255, 255);
	}
	.listButton:hover,
	.listButton:active {
		border: 2px solid rgb(135, 206, 235);
		background-color: rgb(135, 206, 235);
		border-radius: 6px;
		color: rgb(0, 0, 255);
	}
	.addBeerButton {
		border-radius: 6px;
		background-color: rgb(0, 144, 247);
		color: rgb(240, 240, 40);
	}
	.addBeerButton:hover,
	.addBeerButton:active {
		border: 2px solid rgb(0, 0, 255);
		background-color: rgb(255, 255, 255);
		color: rgb(0, 0, 255);
		border-radius: 6px;
	}
`;
