/* eslint-disable no-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';

class AddNewBrewery extends Component {
	state={
	  newBrewery: ''
	}

	handleInput = event => {
	  this.setState({
	    newBrewery: event.target.value
	  });
	}

	handleButtonClick = event => {
	  event.preventDefault();
	  if (event.target.name === 'reset') {
	    this.handleReset();
	  } else if (event.target.name === 'search') {
	    this.props.search(this.state.newBrewery);
	  }
	}

	handleReset = () => {
	  this.setState({ newBrewery: '' });
	}

	render() {
	  return (
	    <Form>
	      <h4>Add New Brewery</h4>
	      <label htmlFor="newBrewery"></label>
	      <input
	        type="text"
	        placeholder="Brewery Name"
	        name="brewery"
	        className="inputField"
	        value={this.state.newBrewery}
	        onChange={this.handleInput}
	      />
	      <div className="buttonContainer">
	        <button
	          name="search"
	          className="enterButton"
	          onClick={this.handleButtonClick}
	        >Enter</button>
	        <button
	          name="reset"
	          className="cancelButton"
	          onClick={this.handleButtonClick}
	        >Cancel</button>
	      </div>
	    </Form>
	  );
	}
}

export default AddNewBrewery;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	h4 {
		margin: 6px 0;
	}
	.inputField {
		padding: 6px 12px;
		width: 200px;
		border-radius: 6px;
	}
	.buttonContainer {
		width: 100%;
		margin-top: 12px;
		display: flex;
		justify-content: space-evenly;
	}
	button {
		width: 80px;
		height: 33px;
		border: 2px solid black;
		border-radius: 6px;
	}
	.enterButton:hover {
		border: 2px solid transparent;
		background-color: rgb(135, 206, 235);
		color: rgb(0, 0, 255);
	}
	.cancelButton:hover {
		border: 2px solid transparent;
		background-color: rgb(255, 0, 0);
		color: rgb(255, 255, 255);
	};
`;
