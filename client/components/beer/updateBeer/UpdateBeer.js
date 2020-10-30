/* eslint-disable no-tabs */
import Rating from 'beauty-stars';
import React, { Component } from 'react';
import styled from 'styled-components';

class UpdateBeer extends Component {
	state = {
	  rating: this.props.beerToUpdate.rating,
	  note: this.props.beerToUpdate.note,
	  bar: this.props.beerToUpdate.bar
	}

	handleInput = event => {
	  const target = event.target;
	  const name = target.name;
	  const value = target.value;
	  this.setState({ [name]: value });
	}

	handleClick = event => {
	  event.preventDefault();
	  const updatedBeerData = {
	    beerID: this.props.beerToUpdate.beerID,
	    name: this.props.beerToUpdate.name,
	    breweryID: this.props.beerToUpdate.breweryID,
	    brewery: this.props.beerToUpdate.brewery,
	    rating: this.state.rating,
	    note: this.state.note,
	    bar: this.state.bar

	  };
	  if (event.target.name === 'update') {
	    this.props.editBeer(updatedBeerData);
	  } else if (event.target.name === 'reset') {
	    this.handleReset();
	  }
	}

	handleReset = () => {
	  this.setState({
	    rating: 0,
	    note: '',
	    bar: ''
	  });
	  window.location.reload(true);
	}

	render() {
	  return (
	    <UpdateModal>
	      <h3>{this.props.beerToUpdate.name}</h3>
	      <h4>{this.props.beerToUpdate.brewery}</h4>
	      <Form>
	        <fieldset>
	          <label htmlFor="rating">Rating: </label>
	          <Rating
	            value={this.state.rating}
	            onChange={rating => this.setState({ rating })} />
	        </fieldset>
	        <fieldset>
	          <label htmlFor="note">Note: </label>
	          <textarea
	            type="text"
	            placeholder="What do you think?"
	            name="note"
	            rows="4"
	            value={this.state.note}
	            onChange={this.handleInput}/>
	        </fieldset>
	        <fieldset>
	          <label htmlFor="bar">Bar: </label>
	          <input
	            type="text"
	            placeholder="Where did you have this beer?"
	            name="bar"
	            value={this.state.bar}
	            onChange={this.handleInput}/>
	        </fieldset>
	        <div className="button-container">
	          <button
	            name="update"
	            className="updateButton"
	            onClick={this.handleClick}>Update</button>
	          <button
	            name="reset"
	            className="resetButton"
	            onClick={this.handleClick}>Cancel</button>
	        </div>
	      </Form>
	    </UpdateModal>
	  );
	}
}

export default UpdateBeer;

const UpdateModal = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	text-align: center;
	z-index: 5;
	background-color: rgba(0, 0, 0, 0.25);
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
	padding: 6px 12px;
	border-radius: 6px;
}
input, textarea {
	width: 200px;
}
select {
	width: 208px;
}
.button-container {
	margin: 6px 0;
}
button {
	border-radius: 6px;
	padding: 6px 12px;
	margin: 0 6px;
	cursor: pointer;
	outline: none;
}
.updateButton {
	border: 2px solid rgb(0, 255, 0);
	color: rgb(80, 80, 80);
	background-color: rgb(255, 255, 255);
}
.updateButton:hover {
	border:2px solid transparent;
	background-color: rgb(0, 255, 0);
	color: rgb(255, 255, 255);
	box-shadow: 0 2px 5px rgb(0, 255, 0);
}
.updateButton:active {
	box-shadow: inset -1px 1px 5px rgb(80, 80, 80);
	box-shadow: 0;
}
.resetButton {
	border: 2px solid rgb(255, 0, 0);
	color: rgb(80, 80, 80);
	background-color: rgb(255, 255, 255);
}
.resetButton:hover {
	border: 2px solid transparent;
	background-color: rgb(0, 255, 0);
	color: rgb(255, 255, 255);
	box-shadow: 0 2px 5px rgb(0, 255, 0);
}
.resetButton:active {
	box-shadow: inset -1px 1px 5px rgb(80, 80, 80);
	box-shadow: 0;
}
`;
