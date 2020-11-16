import PickRating from 'beauty-stars'
import React, { Component } from 'react'
import styled from 'styled-components'

class addBeerData extends Component {
	state ={
	  name: '',
	  style: '',
	  brewery: '',
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
	  })
	}

	handleClick = event => {
	  event.preventDefault()
	  const beerData = {
	    name: this.state.name,
	    style: this.state.style,
	    brewery: this.state.brewery,
	    rating: this.state.rating,
	    note: this.state.note,
	    bar: this.state.bar
	  }

	  if (!this.state.name) {
	    this.setState({
	      invalid: 'name',
	      invalidMessage: 'Please enter beer name.',
	      disabled: true
	    })
	  } else if (!this.state.style) {
	    this.setState({
	      invalid: 'style',
	      invalidMesage: 'Please enter a style',
	      disabled: true
	    })
	  } else if (!this.state.brewery) {
	    this.setState({
	      invalid: 'brewery',
	      invalidMesage: 'Please enter a brewery',
	      disabled: true
	    })
	  } else if (!this.state.rating) {
	    this.setState({
	      invalid: 'rating',
	      invalidMessage: 'Please set a rating.',
	      disabled: true
	    })
	  } else if (!this.state.note) {
	    this.setState({
	      invalid: 'note',
	      invalidMessage: 'Please enter a tasting note.',
	      disabled: true
	    })
	  } else if (!this.state.bar) {
	    this.setState({
	      invalid: 'bar',
	      invalidMessage: 'Please enter bar name.',
	      disabled: true
	    })
	  } else if (event.target.name === 'submit') {
	    this.addBeerData(beerData)
	  }
	  if (event.target.name === 'reset') {
	    this.handleReset()
	  }
	}

	handleRatingEnter = () => {
	  this.setState({
	    invalid: '',
	    invalidMessage: '',
	    disabled: false
	  })
	}

	handleReset = () => {
	  this.props.setView('beerList')
	}

	addBeerData = beerData => {
	  fetch('/api/beer', {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(beerData)
	  })
	    .then(response => response.json())
	    .then(data => this.handleReset())
	}

	render() {
	  return (
	    <AddBeerContainer>
	      <form className="form">
	      	<h1 className="title">Add Beer Info</h1>
	        <fieldset>
	            <input
	            type="text"
	            className="input"
	              placeholder=" "
	              name="name"
	              value={this.state.name}
	              onChange={this.handleInput} />
	          	<div className="cut name"></div>
	          	<label htmlFor="name" className="placeholder">Beer</label>
	            {
	              this.state.invalid === 'name'
	                ? <div className="errorMessage">{this.state.invalidMessage}</div>
	                : null
	            }
	        </fieldset>
	        <fieldset>
	          <input
	            type="text"
	            className="input"
	            placeholder=" "
	            name="style"
	            value={this.state.style}
	            onChange={this.handleInput} />
	          <div className="cut style"></div>
	          <label htmlFor="style" className="placeholder">Style</label>
	            {
	              this.state.invalid === 'style'
	                ? <div className="errorMessage">{this.state.invalidMessage}</div>
	                : null
	            }
	        </fieldset>
	        <fieldset>
	          <input
	            type="text"
	            className="input"
	            placeholder=" "
	            name="brewery"
	            value={this.state.brewery}
	            onChange={this.handleInput} />
	          <div className="cut brewery"></div>
	          <label htmlFor="brewery" className="placeholder">Brewery</label>
	            {
	            	this.state.invalid === 'brewery'
	                ? <div className="errorMessage">{this.state.invalidMessage}</div>
	                : null
	            }
	        </fieldset>
	        <fieldset>
	          <label htmlFor="rating"></label>
	          <PickRating
	            value={this.state.rating}
	            onChange={rating => {
	              this.setState({ rating })
	              this.handleRatingEnter()
	            }}
	          />
	          {
	            this.state.invalid === 'rating'
	              ? <div className="errorMessage">{this.state.invalidMessage}</div>
	              : null
	          }
	        </fieldset>
	        <fieldset>
	          <textarea
	            type="text"
	            placeholder=" "
	            name="note"
	            rows="4"
	            value={this.state.note}
	            onChange={this.handleInput} />
	          <div className="cut note"></div>
	          <label htmlFor="notes" className="placeholder">Notes</label>
	            {
	              this.state.invalid === 'note'
	                ? <div className="errorMessage">{this.state.invalidMessage}</div>
	                : null
	            }
	        </fieldset>
	        <fieldset>
	          <input
	            type="text"
	            className="input"
	            placeholder=" "
	            name="bar"
	            value={this.state.bar}
	            onChange={this.handleInput} />
	          <div className="cut bar"></div>
	          <label htmlFor="bar" className="placeholder">Bar</label>
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
	  )
	}
}

export default addBeerData

const AddBeerContainer = styled.div`
	display: flex;
	justify-content: center;

	h4 {
		margin-top: 6px;
		margin-bottom: 0;
	}
	.title {
		margin: 0 0 24px 0;
		color: hsl(49, 100%, 96%);
	}
	.form {
		background-color: hsl(15, 86%, 30%);
		border: 2px solid transparent;
		border-radius: 12px;
		margin: 24px 0;
		padding: 12px 24px;
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
		position: relative;
	}
	label {
		display: inline-block;
		text-align: center;
		margin: 6px 0;
		vertical-align: top;
		border-radius: 6px;
	}
	input {
		padding: 7px 20px;
		border-radius: 6px;
		width: 200px;
	}
	textarea {
		border: 2px solid;
		border-color: rgb(0, 0, 0) rgb(118, 118, 118) rgb(118, 118, 118) rgb(0, 0, 0);
		border-radius: 6px;
		padding: 7px 20px;
		width: 200px;
		font-family: 'Roboto';
	}

	.input, textarea {
		transition box-shadow .2s ease-in-out;
		box-shadow: inset 0px 0px 0px 0px transparent;
	}
	.input:placeholder-shown,
	textarea:placeholder-shown {
		background-color: hsl(15, 86%, 30%);
	}
	.input:focus,
	textarea:focus {
		box-shadow: inset 0px 0px 0px 2px hsl(48, 94%, 68%);
	}
	.cut {
		border-radius: 10px;
		position: absolute;
		height: 16px;
		left: 20px;
		top: -30px;
		transform: translateY(10px);
		transition: transform 200ms;
	}
	.cut.name {
		width: 45px;
	}
	.cut.style {
		width: 46px;
	}
	.cut.brewery {
		width: 60px;
	}
	.cut.note {
		width: 50px;
	}
	.cut.bar {
		width: 40px;
	}
	.input:focus ~ .cut,
	.input:not(:placeholder-shown) ~ .cut,
	textarea:focus ~ .cut,
	textarea:not(:placeholder-shown) ~ .cut {
		transform: translateY(22px);
		background-color: hsl(15, 86%, 30%);
	}
	.input:-webkit-autofill,
	textarea:-webkit-autofill,
	.input:not(:placeholder-shown),
	.input:not(:placeholder-shown) ~ .cut,
	textarea:not(:placeholder-shown),
	textarea:not(:placeholder-shown) ~ .cut {
		background-color: hsl(49, 100%, 96%) !important;
		color: hsl(15, 86%, 30%);
	}
	.placeholder {
		position: absolute;
		color: hsl(49, 100%, 96%);
		font-size: 14px;
		font-weight: 400;
		top: 2px;
		left: 20px;
		transform-origin: 0 50%;
		transition: transform 200ms, color 200ms;
	}
	.input:focus ~ .placeholder,
	.input:not(:placeholder-shown) ~ .placeholder,
	textarea:focus ~ .placeholder,
	textarea:not(:placeholder-shown) ~ .placeholder {
		transform: translateY(-17px) translateX(12px) scale(0.75);
	}
	.input:not(:placeholder-shown) ~ .placeholder,
	textarea:not(:placeholder-shown) ~ .placeholder {
		color: #808097;
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
`
