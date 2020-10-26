/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import AddBeer from './addBeer/AddBeer';
import BeerList from './beerList/BeerList';
import BreweryList from './breweries/BreweryList';
import Header from './ui/header';

export default class App extends React.Component {
	state = {
	  view: 'add'
	}

	setView = view => {
	  this.setState({ view: view });
	}

	render() {
	  let component = null;
	  const view = this.state.view;
	  if (view === 'beerList') {
	    component = <BeerList />;
	  } else if (view === 'add') {
	    component = <AddBeer setView={this.setView}/>;
	  } else if (view === 'brewery') {
	    component = <BreweryList />;
	  }

	  return (
	    <>
	      <Header setView={this.setView}/>
	      <hr />
	      {component}
	    </>
	  );
	}
}
