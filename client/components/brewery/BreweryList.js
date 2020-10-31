/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import EmptyList from '../ui/emptyList/EmptyList';
import Spinner from '../ui/spinner/Spinner';
import LargeTable from './breweryTables/LargeTable';
import MediumTable from './breweryTables/MediumTable';
import SmallTable from './breweryTables/SmallTable';

class BreweryList extends Component {
	state = {
	  breweryList: [],
	  breweryListLoaded: false,
	  windowWidth: null
	}

	handleResize = () => {
	  this.setState({
	    windowWidth: window.innerWidth
	  });
	}

	componentDidMount() {
	  this.getBreweryList();
	  this.handleResize();
	  window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.handleResize);
	}

	getBreweryList = () => {
	  fetch('/api/brewery')
	    .then(response => response.json())
	    .then(data => this.setState({ breweryList: data, breweryListLoaded: true }))
	    .catch(error => console.error(error));
	}

	render() {
	  let breweryList = <Spinner />;
	  const loaded = this.state.breweryListLoaded;
	  const width = this.state.windowWidth;
	  if (this.state.breweryListLoaded && this.state.breweryList.length === 0) {
	    breweryList = <EmptyList setView={this.props.setView} list={'brewery'} />;
	  }
	  if (loaded) {
	    breweryList = <LargeTable
	      breweryList={this.state.breweryList} />;
	  }
	  if (loaded && width < 878) {
	    breweryList = <MediumTable
	      breweryList={this.state.breweryList} />;
	  }
	  if (loaded && width < 501) {
	    breweryList = <SmallTable
	      breweryList={this.state.breweryList} />;
	  }
	  return breweryList;
	}
}

export default BreweryList;
