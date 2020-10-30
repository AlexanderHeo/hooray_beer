/* eslint-disable no-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';
import Spinner from '../../ui/spinner/Spinner';
import AddBeerData from './AddBeerData';
import AddBreweryFromList from './AddBreweryFromList';
import AddBreweryFromQuery from './AddBreweryFromQuery';
import SearchForBrewery from './SearchForBrewery';

class AddBeer extends Component {
	state = {
	  breweryList: [],
	  breweryListLoaded: false,
	  brewery: {},
	  breweryAdded: false,
	  searchBreweryList: [],
	  searchBreweryLoaded: false,
	  searchBreweryFail: false,
	  beerData: {
	    name: '',
	    rating: 0,
	    note: '',
	    bar: ''
	  },
	  beerAdded: false
	}

	componentDidMount() {
	  this.getBreweryList();
	}

	getBreweryList = () => {
	  fetch('/api/brewery')
	    .then(response => response.json())
	    .then(data => {
	      this.setState({
	        breweryList: data,
	        breweryListLoaded: true
	      });
	    })
	    .catch(error => console.error(error));
	}

	addBreweryFromList = breweryData => {
	  this.setState({
	    brewery: breweryData,
	    breweryAdded: true
	  });
	}

	searchBrewery = breweryName => {
	  fetch(`https://api.openbrewerydb.org/breweries/search?query=${breweryName}`)
	    .then(response => response.json())
	    .then(data => {
	      if (data.length === 0) {
	        this.setState({
	          searchBreweryFail: true
	        });
	      }
	      this.setState({
	        searchBreweryList: data,
	        searchBreweryLoaded: true
	      });
	    });
	}

	addBreweryFromQuery = breweryData => {
	  const brewery = {
	    breweryID: breweryData.id,
	    name: breweryData.name,
	    city: breweryData.city,
	    state: breweryData.state,
	    link: breweryData.website_url
	  };
	  fetch('/api/brewery', {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(brewery)
	  })
	    .then(response => response.json())
	    .then(data => {
	      this.setState({
	        brewery: brewery,
	        breweryAdded: true
	      });
	    });
	}

	addBeerData = beerData => {
	  beerData.breweryID = this.state.brewery.breweryID;
	  fetch('/api/beer', {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(beerData)
	  })
	    .then(response => response.json())
	    .then(data => this.handleReset());
	}

	handleReset = () => {
	  this.setState({
	    breweryList: [],
	    breweryListLoaded: false,
	    brewery: {},
	    breweryAdded: false,
	    searchBreweryList: [],
	    searchBreweryLoaded: false,
	    searchBreweryFail: false,
	    beerData: {
	      name: '',
	      rating: 0,
	      note: '',
	      bar: ''
	    },
	    beerAdded: false
	  });
	  this.props.setView('beerList');
	}

	render() {
	  let breweryList = <Spinner />;
	  if (this.state.breweryListLoaded) {
	    breweryList = (
	      <AddBreweryContainer>
	        <AddBreweryFromList
	          brewery={this.state.breweryList}
	          addBreweryFromList={this.addBreweryFromList}/>
	        <SearchForBrewery
	          search={this.searchBrewery}/>
	      </AddBreweryContainer>
	    );
	  }
	  if (this.state.searchBreweryLoaded && !this.state.searchBreweryFail) {
	    breweryList = (
	      <AddBreweryFromQuery
	        brewery={this.state.searchBreweryList}
	        addFromQuery={this.addBreweryFromQuery}/>
	    );
	  } else if (this.state.searchBreweryLoaded && this.state.searchBreweryFail) {
	    this.props.setView('fail');
	  }
	  if (this.state.breweryAdded) {
	    breweryList = (
	      <AddBeerData
	        addBeerData={this.addBeerData}
	        setView={this.props.setView}/>
	    );
	  }
	  return (
	    <AddBreweryContainer>
	      { breweryList }
	    </AddBreweryContainer>
	  );
	}
}

export default AddBeer;

const AddBreweryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
