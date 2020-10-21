/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';

class NewBeer extends Component {
	state = {
	  name: '',
	  brewery: '',
	  rating: '',
	  notes: '',
	  bar: ''
	}

	handleInput = event => {
	  const target = event.target;
	  const name = target.name;
	  const value = target.value;
	  this.setState({ [name]: value });
	}

	render() {
	  return (
	    <Form
	      onSubmit={this.handleSubmit}
	      onReset={this.handleReset}>
	      <fieldset>
	        <label htmlFor="name">Beer Name:</label>
	        <input
	          type="text"
	          placeholder="Beer"
	          name="name"
	          value={this.state.name}
	          onChange={this.handleInput} />
	      </fieldset>
	      <fieldset>
	        <label htmlFor="brewery">Brewery Name:</label>
	        <input
	          type="text"
	          placeholder="Brewery"
	          name="brewery"
	          value={this.state.brewery}
	          onChange={this.handleInput} />
	      </fieldset>
	      <fieldset>
	        <label htmlFor="rating">Rating:</label>
	        <input
	          type="text"
	          placeholder="rating"
	          name="rating"
	          value={this.state.rating}
	          onChange={this.handleInput} />
	      </fieldset>
	      <fieldset>
	        <label htmlFor="notes">Notes:</label>
	        <textarea
	          type="text"
	          placeholder="What are your thoughts?"
	          name="notes"
	          value={this.state.notes}
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
	    </Form>
	  );
	}
}

export default NewBeer;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
fieldset {
	border: none;
}
label {
	display: inline-block;
	width: 120px;
	text-align: right;
}
input, textarea {
	width: 200px;
}
`;
