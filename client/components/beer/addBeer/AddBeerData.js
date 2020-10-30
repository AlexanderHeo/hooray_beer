/* eslint-disable no-tabs */
import PickRating from 'beauty-stars';
import React, { Component } from 'react';
import styled from 'styled-components';

class addBeerData extends Component {
	state ={
	  name: '',
	  rating: 0,
	  note: '',
	  bar: ''
	}

	handleInput = event => {
	  const target = event.target;
	  const name = target.name;
	  const value = target.value;
	  this.setState({ [name]: value });
	}

	handleClick = event => {
	  event.preventDefault();
	  const beerData = {
	    name: this.state.name,
	    rating: this.state.rating,
	    note: this.state.note,
	    bar: this.state.bar
	  };
	  if (event.target.name === 'submit') {
	    this.props.addBeerData(beerData);
	  } else if (event.target.name === 'reset') {
	    this.handleReset();
	  }
	}

	handleReset = () => {
	  this.setState({
	    name: '',
	    rating: 0,
	    note: '',
	    bar: ''
	  });
	  this.props.setView('beerList');
	}

	render() {
	  return (
	    <AddBeerContainer>
	      <Form>
	        <fieldset>
	          <label htmlFor="name">Beer:</label>
	          <input
	            type="text"
	            placeholder="Beer"
	            name="name"
	            value={this.state.name}
	            onChange={this.handleInput} />
	        </fieldset>
	        <fieldset>
	          <label htmlFor="rating">Rating:</label>
	          <PickRating
	            value={this.state.rating}
	            onChange={rating => this.setState({ rating })}
	          />
	        </fieldset>
	        <fieldset>
	          <label htmlFor="notes">Notes:</label>
	          <textarea
	            type="text"
	            placeholder="What are your thoughts?"
	            name="note"
	            rows="4"
	            value={this.state.note}
	            onChange={this.handleInput} />
	        </fieldset>
	        <fieldset>
	          <label htmlFor="bar">Bar:</label>
	          <input
	            type="text"
	            placeholder="Where did you drink this beer?"
	            name="bar"
	            value={this.state.bar}
	            onChange={this.handleInput} />
	        </fieldset>
	        <div className="button-container">
	          <button
	            name="submit"
	            className="addButton"
	            onClick={this.handleClick}>Add Beer</button>
	          <button
	            name="reset"
	            className="cancelButton"
	            onClick={this.handleClick}>Cancel</button>
	        </div>
	      </Form>
	    </AddBeerContainer>
	  );
	}
}

export default addBeerData;

const AddBeerContainer = styled.div`
	border: 2px solid rgb(118, 118, 118);
	border-radius: 12px;
	box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
	margin: 24px 0;
	padding: 12px 24px;
	h4 {
		margin-top: 6px;
		margin-bottom: 0;
	}
`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

fieldset {
	margin: 6px;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
}
label {
	display: inline-block;
	text-align: center;
	margin: 6px 0;
	vertical-align: top;
	border-radius: 6px;
}
input {
	padding: 12px;
	border-radius: 6px;
}
input {
	width: 200px;
}
textarea {
	border: 2px solid;
	border-color: rgb(0, 0, 0) rgb(118, 118, 118) rgb(118, 118, 118) rgb(0, 0, 0);
	border-radius: 6px;
	padding: 12px;
	width: 200px;
	font-family: 'Roboto';
}
.button-container {
	width: 100%;
	margin: 6px 0;
	display: flex;
	justify-content: space-evenly;
}
button {
	width: 80px;
	height: 33px;
	border: 2px solid black;
	border-radius: 6px;
}
.addButton {
	border: 2px solid rgb(135, 206, 235);
	background-color: rgb(255, 255, 255);
}
.cancelButton {
	border: 2px solid rgb(255, 0, 0);
	background-color: rgb(255, 255, 255);
}
.addButton:hover {
	border: 2px solid transparent;
	background-color: rgb(135, 206, 235);
	color: rgb(0, 0, 255);
}
.cancelButton:hover {
	border: 2px solid transparent;
	background-color: rgb(255, 0, 0);
	color: rgb(255, 255, 255);
}
`;
