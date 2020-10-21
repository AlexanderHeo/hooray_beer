import React from 'react';
import BeerList from './beerList/BeerList';
import Navigation from './navigation/Navigation';
import NewBeer from './newBeer/NewBeer';
import Header from './ui/header';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <hr />
        <Navigation />
        <hr />
        <BeerList />
        <NewBeer />
      </>
    );
  }
}
