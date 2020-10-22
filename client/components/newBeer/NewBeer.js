/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { json } from 'express';
import React, { Component } from 'react';
import styled from 'styled-components';

class NewBeer extends Component {
	state = {
	  beer: '',
	  brewery: '',
	  rating: '',
	  notes: '',
	  bar: '',
	  invalidMessage: ''
	}

	handleInput = event => {
	  const target = event.target;
	  const name = target.name;
	  const value = target.value;
	  this.setState({ [name]: value, invalidMessage: '' });
	}

	handleSubmit = event => {
	  event.preventDefault();

	  if (!this.state.beer) {
	    this.setState({
	      invalidMessage: 'Please enter a beer'
	    });
	  } else if (!this.state.brewery) {
	    this.setState({
	      invalidMessage: 'Please enter the brewery'
	    });
	  } else if (!this.state.rating || this.state.rating === 'default') {
	    this.setState({
	      invalidMessage: 'Please enter a rating'
	    });
	  } else if (!this.state.notes) {
	    this.setState({
	      invalidMessage: 'Please enter a note'
	    });
	  } else if (!this.state.bar) {
	    this.setState({
	      invalidMessage: 'Please enter the bar'
	    });
	  } else {
	    this.addNewBeer();
	    this.handleReset();
	  }
	}

	addNewBeer = () => {
	  fetch('/api/add-new-beer', {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: json.stringify(this.state)
	  })
	    .then(response => response.json())
	    .then(data => {
	      this.handleReset();
	    });
	}

	handleReset = () => {
	  this.setState({
	    beer: '',
	    brewery: '',
	    rating: '',
	    notes: '',
	    bar: ''
	  });
	}

	render() {
	  let buttonContainer = null;
	  if (!this.state.invalidMessage) {
	    buttonContainer = <div className="button-container">
	      <button type="submit">Add Beer</button>
	      <button type="reset">Cancel</button>
	    </div>;
	  } else {
	    buttonContainer = <div>{this.state.invalidMessage}</div>;
	  }
	  return (
	    <Form
	      onSubmit={this.handleSubmit}
	      onReset={this.handleReset}>
	      <fieldset>
	        <label htmlFor="beer">Beer Name:</label>
	        <input
	          type="text"
	          placeholder="Beer"
	          name="beer"
	          value={this.state.beer}
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
	        <select
	          name="rating"
	          value={this.state.rating}
	          onChange={this.handleInput}>
	          <option defaultValue="default">Pick a Rating</option>
	          <option value="1">1</option>
	          <option value="2">2</option>
	          <option value="3">3</option>
	          <option value="4">4</option>
	          <option value="5">5</option>
	        </select>

	        {/* <input
	          type="number"
	          placeholder="Enter 1-5"
	          name="rating"
	          value={this.state.rating}
	          onChange={this.handleInput} /> */}
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
	      {buttonContainer}
	    </Form>
	  );
	}
}

export default NewBeer;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 24px 0;

fieldset {
	margin: 3px;
	padding: 0;
	border: none;
}
label {
	display: inline-block;
	width: 120px;
	text-align: right;
	margin-right: 3px;
	vertical-align: top;
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
`;
