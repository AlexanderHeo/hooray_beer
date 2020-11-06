/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import AddBeer from './beer/addBeer/AddBeer';
import SearchBreweryFail from './beer/addBeer/SearchBreweryFail';
import BeerList from './beer/BeerList';
import BreweryList from './brewery/BreweryList';
import Intro from './navigation/intro/Intro';
import Header from './ui/header/Header';

class App extends Component {
	state = {
	  view: 'intro'
	}

	setView = view => {
	  this.setState({ view: view });
	}

	render() {
	  let component = <Intro setView={this.setView}/>;
	  const view = this.state.view;
	  if (view === 'beerList') {
	    component = <BeerList setView={this.setView}/>;
	  } else if (view === 'add') {
	    component = <AddBeer setView={this.setView}/>;
	  } else if (view === 'brewery') {
	    component = <BreweryList setView={this.setView}/>;
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

export default App;
