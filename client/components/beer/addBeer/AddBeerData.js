/* eslint-disable no-tabs */
import PickRating from 'beauty-stars';
import React, { Component } from 'react';
import styled from 'styled-components';

class addBeerData extends Component {
	state ={
	  name: '',
	  rating: 0,
	  note: '',
	  bar: '',
	  invalid: '',
	  invalidMessage: '',
	  disabled: false
	}

	handleInput = event => {
	  this.setState({
	    [event.target.name]: event.target.value,
	    invalid: '',
	    invalidMessage: '',
	    disabled: false
	  });
	}

	handleClick = event => {
	  event.preventDefault();
	  const beerData = {
	    name: this.state.name,
	    rating: this.state.rating,
	    note: this.state.note,
	    bar: this.state.bar
	  };

	  if (!this.state.name) {
	    this.setState({
	      invalid: 'name',
	      invalidMessage: 'Please enter beer name.',
	      disabled: true
	    });
	  } else if (!this.state.rating) {
	    this.setState({
	      invalid: 'rating',
	      invalidMessage: 'Please set a rating.',
	      disabled: true
	    });
	  } else if (!this.state.note) {
	    this.setState({
	      invalid: 'note',
	      invalidMessage: 'Please enter a tasting note.',
	      disabled: true
	    });
	  } else if (!this.state.bar) {
	    this.setState({
	      invalid: 'bar',
	      invalidMessage: 'Please enter bar name.',
	      disabled: true
	    });
	  } else if (event.target.name === 'submit') {
	    this.props.addBeerData(beerData);
	  }
	  if (event.target.name === 'reset') {
	    this.handleReset();
	  }
	}

	handleRatingEnter = () => {
	  this.setState({
	    invalid: '',
	    invalidMessage: '',
	    disabled: false
	  });
	}

	handleReset = () => {
	  this.props.setView('beerList');
	}

	render() {
	  return (
	    <AddBeerContainer>
	      <form className="form">
	        <h4>{this.props.brewery.name}</h4>
	        <fieldset>
	          <label htmlFor="name"></label>
	          <input
	            type="text"
	            placeholder="Beer"
	            name="name"
	            value={this.state.name}
	            onChange={this.handleInput} />
	          {
	            this.state.invalid === 'name'
	              ? <div className="errorMessage">{this.state.invalidMessage}</div>
	              : null
	          }
	        </fieldset>
	        <fieldset>
	          <label htmlFor="rating"></label>
	          <PickRating
	            value={this.state.rating}
	            onChange={rating => {
	              this.setState({ rating });
	              this.handleRatingEnter();
	            }}
	          />
	          {
	            this.state.invalid === 'rating'
	              ? <div className="errorMessage">{this.state.invalidMessage}</div>
	              : null
	          }
	        </fieldset>
	        <fieldset>
	          <label htmlFor="notes"></label>
	          <textarea
	            type="text"
	            placeholder="What are your thoughts?"
	            name="note"
	            rows="4"
	            value={this.state.note}
	            onChange={this.handleInput} />
	          {
	            this.state.invalid === 'note'
	              ? <div className="errorMessage">{this.state.invalidMessage}</div>
	              : null
	          }
	        </fieldset>
	        <fieldset>
	          <label htmlFor="bar"></label>
	          <input
	            type="text"
	            placeholder="Where did you drink this beer?"
	            name="bar"
	            value={this.state.bar}
	            onChange={this.handleInput} />
	          {
	            this.state.invalid === 'bar'
	              ? <div className="errorMessage">{this.state.invalidMessage}</div>
	              : null
	          }
	        </fieldset>
	        <div className="button-container">
	          <button
	            name="submit"
	            className="addButton"
	            onClick={this.handleClick}
	            disabled={this.state.disabled}>Add Beer</button>
	          <button
	            name="reset"
	            className="cancelButton"
	            onClick={this.handleClick}>Cancel</button>
	        </div>
	      </form>
	    </AddBeerContainer>
	  );
	}
}

export default addBeerData;

const AddBeerContainer = styled.div`
	border: 2px solid transparent;
	border-radius: 12px;
	box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
	margin: 24px 0;
	padding: 12px 24px;
	h4 {
		margin-top: 6px;
		margin-bottom: 0;
	}
	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.errorMessage {
		color: rgb(255, 0, 0);
		margin-top: 6px;
	}
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
		cursor: pointer;
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
	.addButton:disabled {
		border: 2px solid rgb(188, 188, 188);
		background-color: rgb(188, 188, 188);
		color: rgb(30, 30, 30);
		cursor: not-allowed;
	}
`;
