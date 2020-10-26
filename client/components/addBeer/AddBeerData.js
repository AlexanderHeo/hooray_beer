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
	    note: 0,
	    bar: ''
	  });
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
	            onClick={this.handleClick}>Add Beer</button>
	          <button
	            name="reset"
	            onClick={this.handleClick}>Cancel</button>
	        </div>
	      </Form>
	    </AddBeerContainer>
	  );
	}
}

export default addBeerData;

const AddBeerContainer = styled.div`
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
}
.button-container {
	margin: 6px 0;
}
`;
