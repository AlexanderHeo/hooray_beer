/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';
import PickRating from '../pickRating/PickRating';

class NewBeer extends Component {
	state = {
	  beer: '',
	  brewery: '',
	  breweryID: '',
	  rating: '',
	  notes: '',
	  bar: '',
	  invalidMessage: '',
	  breweryList: [],
	  breweryNameList: [],
	  breweryQuery: [],
	  breweryForm: '',
	  breweryQueryLoading: false,
	  brewerySet: false
	}

	componentDidMount() {
	  this.getBreweryList();
	}

	getBreweryList = () => {
	  fetch('/api/brewery-list')
	    .then(response => response.json())
	    .then(data => {
	      const breweryNameList = [];
	      data.forEach(brewery => breweryNameList.push({ name: brewery.name, breweryID: brewery.id }));
	      this.setState({
	        breweryList: data,
	        breweryNameList: breweryNameList
	      });
	    })
	    .catch(error => console.error(error));
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
	  const newBeer = {
	    name: this.state.beer,
	    brewery: this.state.breweryID,
	    rating: this.state.rating,
	    note: this.state.notes,
	    bar: this.state.bar
	  };
	  fetch('/api/add-new-beer', {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(newBeer)
	  })
	    .then(response => response.json())
	    .then(data => {
	      this.handleReset();
	    });
	}

	enterBrewery = event => {
	  event.preventDefault();
	  if (!this.state.brewery) {
	    this.setState({ invalidMessage: 'You must enter a brewery.' });
	  } else if (this.state.brewery) {
	    this.queryBreweries(this.state.brewery);

	  }
	}

	addBreweryToForm = (name, id) => {
	  this.setState({ breweryForm: name, breweryID: id });
	}

	queryBreweries = brewery => {
	  fetch(`https://api.openbrewerydb.org/breweries/search?query=${brewery}`)
	    .then(response => response.json())
	    .then(data => {
	      this.setState({
	        breweryQueryLoading: true,
	        breweryQuery: data
	      });
	    });
	}

	addNewBrewery = brewery => {
	  const breweryData = {
	    name: brewery.name,
	    breweryID: brewery.id,
	    city: brewery.city,
	    state: brewery.state,
	    link: brewery.website_url
	  };

	  fetch('/api/add-new-brewery', {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(breweryData)
	  })
	    .then(response => response.json())
	    .then(data => {
	      this.setState({ brewerySet: true });
	    });
	}

	render() {
	  const breweryNameList = this.state.breweryList.map(brewery => {
	    return <li
	      key={brewery.breweryID}
	      onClick={() => this.addBreweryToForm(brewery.name, brewery.breweryID)}>
	      {brewery.name}</li>;
	  });

	  let addBreweryFromQuery = null;
	  if (this.state.breweryQueryLoading) {
	    addBreweryFromQuery = (
	      <ChooseBrewery>
	        <h4>Pick the correct brewery from below:</h4>
	        <UL>
	        {this.state.breweryQuery.map(brewery => {
	          return (
	            <li
	              key={brewery.id}
	              onClick={() => this.addNewBrewery(brewery)}>
	              <div>{brewery.name}</div>
	              <div>{brewery.city}</div>
	            </li>
	          );
	        })}
	        </UL>
	      </ChooseBrewery>
	    );
	  }

	  const addBreweryForm = (
	    <AddBeerForm>
	      <h4>Pick a brewery:</h4>
	      <UL>
	        {breweryNameList}
	      </UL>
	      <Form
	        onSubmit={this.handleSubmit}
	        onReset={this.handleReset}>
	        <fieldset>
	          <label htmlFor="brewery">
	            <h4>Or Enter A New Brewery:</h4>
	          </label>
	          <input
	            type="text"
	            placeholder="Brewery Name"
	            name="brewery"
	            value={this.state.brewery}
	            onChange={this.handleInput} />
	        </fieldset>
	        {!this.state.invalidMessage
	          ? (
	            <div className="buttonContainer">
	              <button onClick={this.enterBrewery}>Enter</button>
	            </div>
	          )
	          : <div>{this.state.invalidMessage}</div>}
	      </Form>
	    </AddBeerForm>
	  );

	  const addBeerForm = (
	    <AddBeerForm onSubmit={this.addNewBeer}>
	      <Form onSubmit={this.addNewBeer}>
	        <fieldset>
	          <label htmlFor="beer">Beer:</label>
	          <input
	            type="text"
	            placeholder="Beer"
	            name="beer"
	            value={this.state.beer}
	            onChange={this.handleInput} />
	        </fieldset>
	        <fieldset>
	          <label htmlFor="rating">Rating:</label>
	          <PickRating />
	        </fieldset>
	        <fieldset>
	          <label htmlFor="notes">Notes:</label>
	          <textarea
	            type="text"
	            placeholder="What are your thoughts?"
	            name="notes"
	            rows="4"
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
	        <div className="button-container">
	          <button type="submit">Add Beer</button>
	          <button type="reset">Cancel</button>
	        </div>
	      </Form>
	    </AddBeerForm>
	  );

	  let addNewBeerComponent = addBreweryForm;
	  if (this.state.breweryQueryLoading) {
	    addNewBeerComponent = addBreweryFromQuery;
	  } else if (this.state.breweryForm) {
	    addNewBeerComponent = addBeerForm;
	  }

	  return (addNewBeerComponent);
	}
}

export default NewBeer;

const AddBeerForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h4 {
		margin-top: 6px;
		margin-bottom: 0;
	}
`;

const UL = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin-top: 0;
	li {
		margin: 3px;
		width: 200px;
		border: 2px solid;
		border-radius: 6px;
		border-color: rgb(0, 0, 0) rgb(118, 118, 118) rgb(118, 118, 118) rgb(0, 0, 0);
		padding: 6px 12px;
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

const ChooseBrewery = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
