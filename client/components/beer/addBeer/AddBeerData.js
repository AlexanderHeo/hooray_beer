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
	    this.props.addBeerData(beerData)
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

	render() {
	  return (
	    <AddBeerContainer>
	      <form className="form">
	        <fieldset>
	            <input
	            type="text"
	            className="input"
	              placeholder=" "
	              name="name"
	              value={this.state.name}
	              onChange={this.handleInput} />
	          	<div className="cut"></div>
	          	<label htmlFor="name" className="placeholder">Beer</label>
	            {
	              this.state.invalid === 'name'
	                ? <div className="errorMessage">{this.state.invalidMessage}</div>
	                : null
	            }
	        </fieldset>
	        <fieldset>
	          <label htmlFor="style">
	            <input
	              type="text"
	              placeholder="Style"
	              name="style"
	              value={this.state.style}
	              onChange={this.handleInput} />
	            {
	              this.state.invalid === 'style'
	                ? <div className="errorMessage">{this.state.invalidMessage}</div>
	                : null
	            }
	          </label>
	        </fieldset>
	        <fieldset>
	          <label htmlFor="brewery">
	            <input
	              type="text"
	              placeholder="Brewery"
	              name="brewery"
	              value={this.state.brewery}
	              onChange={this.handleInput} />
	            {
	              this.state.invalid === 'brewery'
	                ? <div className="errorMessage">{this.state.invalidMessage}</div>
	                : null
	            }
	          </label>
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
	          <label htmlFor="notes">
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
	          </label>
	        </fieldset>
	        <fieldset>
	          <label htmlFor="bar">
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
	          </label>
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
	.form {
		border: 2px solid transparent;
		border-radius: 12px;
		box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
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
		padding: 12px;
		border-radius: 6px;
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

	::placeholder {
		color: #fff;
	}
	.input {
		transition box-shadow .2s ease-in-out;
		box-shadow: inset 0px 0px 0px 0px transparent;
	}
	.input:focus {
		box-shadow: inset 0px 0px 0px 2px #dc2f55;
	}
	.cut {
		border-radius: 10px;
		position: absolute;
		height: 20px;
		width: 80px;
		left: 20px;
		top: -20px;
		transform: translateY(0);
		transition: transform 200ms;
	}
	.input:focus ~ .cut,
	.input:not(:placeholder-shown) ~ .cut {
		transform: translateY(8px);
	}
	.placeholder {
		position: absolute;
		color: #65657b;
		font-size: 14px;
		font-weight: 300;
		top: 8px;
		left: 12px;
		transform-origin: 0 50%;
		transition: transform 200ms, color 200ms;
	}
	.input:focus ~ .placeholder,
	.input:not(:placeholder-shown) ~ .placeholder {
		transform: translateY(-30px) translateX(10px) scale(0.75);
	}
	.input:not(.input:placeholder-shown) ~ .placeholder {
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
