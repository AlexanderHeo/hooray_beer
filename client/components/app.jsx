/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import Add from './addBeer/AddBeerForm';
import BeerList from './beerList/BeerList';
import BreweryList from './breweries/BreweryList';
import Pick from './pickRating/PickRating';
import Header from './ui/header';

export default class App extends React.Component {
	state = {
	  view: 'pick'
	}

	setView = view => {
	  this.setState({ view: view });
	}

	pickRating = event => {
	  console.log(event.currentTarget.getAttribute('name'));
	}

	render() {
	  let component = null;
	  const view = this.state.view;
	  if (view === 'beerList') {
	    component = <BeerList />;
	  } else if (view === 'add') {
	    component = <Add />;
	  } else if (view === 'brewery') {
	    component = <BreweryList />;
	  } else if (view === 'pick') {
	    component = <Pick pickRating={this.pickRating}/>;
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
