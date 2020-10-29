/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import AddBeer from './beer/addBeer/AddBeer';
import SearchBreweryFail from './beer/addBeer/SearchBreweryFail';
import BeerList from './beer/BeerList';
import BreweryList from './brewery/BreweryList';
import Header from './ui/header/Header';

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
	    component = <BeerList setView={this.setView}/>;
	  } else if (view === 'add') {
	    component = <AddBeer setView={this.setView}/>;
	  } else if (view === 'brewery') {
	    component = <BreweryList />;
	  } else if (view === 'fail') {
	    component = <SearchBreweryFail setView={this.setView}/>;
	  }

	  return (
	    <>
	      <Header setView={this.setView}/>
	      {component}
	    </>
	  );
	}
}
