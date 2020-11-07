/* eslint-disable no-tabs */
import Rating from 'beauty-stars';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../../../store/action/beer';

class UpdateBeer extends Component {
	state = {
	  rating: this.props.beerToEdit.rating,
	  note: this.props.beerToEdit.note,
	  bar: this.props.beerToEdit.bar,
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
	  const updatedBeerData = {
	    beerID: this.props.beerToEdit.beerID,
	    name: this.props.beerToEdit.name,
	    breweryID: this.props.beerToEdit.breweryID,
	    brewery: this.props.beerToEdit.brewery,
	    rating: this.state.rating,
	    note: this.state.note,
	    bar: this.state.bar
	  };

	  if (!this.state.rating) {
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
	  } else if (event.target.name === 'update') {
	    this.props.editBeer(updatedBeerData);
	  } else if (event.target.name === 'reset') {
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
	    <UpdateModal>
	      <div className="update">
	        <div className="name">{this.props.beerToEdit.name}</div>
	        <div className="brewery">{this.props.beerToEdit.brewery}</div>
	        <form className="form">
	          <fieldset>
	            <label htmlFor="rating">Rating: </label>
	            <Rating
	              value={this.state.rating}
	              onChange={rating => {
	                this.setState({ rating });
	                this.handleRatingEnter();
	              }} />
	            {
	              this.state.invalid === 'rating'
	                ? <div className="errorMessage">{this.state.invalidMessage}</div>
	                : null
	            }
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
	            {
	              this.state.invalid === 'note'
	                ? <div className="errorMessage">{this.state.invalidMessage}</div>
	                : null
	            }
	          </fieldset>
	          <fieldset>
	            <label htmlFor="bar">Bar: </label>
	            <input
	              type="text"
	              placeholder="Where did you have this beer?"
	              name="bar"
	              value={this.state.bar}
	              onChange={this.handleInput}/>
	            {
	              this.state.invalid === 'bar'
	                ? <div className="errorMessage">{this.state.invalidMessage}</div>
	                : null
	            }
	          </fieldset>
	          <div className="button-container">
	            <button
	              name="update"
	              className="updateButton"
	              onClick={this.handleClick}
	              disabled={this.state.disabled}>Update</button>
	            <button
	              name="reset"
	              className="resetButton"
	              onClick={this.handleClick}>Cancel</button>
	          </div>
	        </form>
	      </div>
	    </UpdateModal>
	  );
	}
}

const mapStateToProps = state => {
  return {
    beerToEdit: state.beerReducer.beerToEdit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editBeer: beer => dispatch(actions.editBeer(beer))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBeer);

const UpdateModal = styled.div`
	margin: 24px 12px;
	width: 100%;
	position: absolute;
	text-align: center;
	display: flex;
	justify-content: center;
	.update {
		background-color: rgba(0, 0, 0, 0.1);
		border: 2px solid transparent;
		border-radius: 6px;
		box-shadow:  0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
		padding: 12px;
	}
	.name {
		margin-bottom: 6px;
		font-size: 30px;
		font-weight: 700;
	}
	.brewery {
		font-weight: 700;
		font-size: 26px;
	}
	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.errorMessage {
		color: rgb(180, 0, 0);
		margin-top: 6px;
	}
	fieldset {
		margin: 12px;
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
	textarea {
		padding: 6px;
		border-width: 2px;
		border-radius: 6px;
		border-color: rgb(33, 33, 33) rgb(133, 133, 133) rgb(133, 133, 133) rgb(33, 33, 33);
		font-family: 'Roboto';
		width: 212px;
	}
	select {
		width: 208px;
	}
	.button-container {
		margin: 12px 0;
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
	.updateButton:disabled {
		border: 2px solid rgb(188, 188, 188);
		background-color: rgb(188, 188, 188);
		color: rgb(30, 30, 30);
		cursor: not-allowed;
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
