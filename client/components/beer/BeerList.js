/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import EmptyList from '../ui/emptyList/EmptyList';
import Spinner from '../ui/spinner/Spinner';
import LargeTable from './tables/LargeTable';
import SmallTable from './tables/SmallTable';
import UpdateBeer from './updateBeer/UpdateBeer';

class BeerList extends Component {
  state = {
    beerList: [],
    beerListLoaded: false,
    editing: false,
    beerToUpdate: [],
    windowWidth: null
  }

	handleResize = () => {
	  this.setState({
	    windowWidth: window.innerWidth
	  });
	}

	componentDidMount() {
	  this.getBeerList();
	  this.handleResize();
	  window.addEventListener('resize', this.handleResize);
	}

  getBeerList = () => {
    fetch('/api/beer')
      .then(response => response.json())
      .then(data => this.setState({
        beerList: data,
        beerListLoaded: true
      }))
      .catch(error => console.error(error));
  }

	handleEditButton = (event, beerData) => {
	  const name = event.target.name;
	  if (name === 'remove') {
	    this.handleRemoveBeer(beerData);
	  } else if (name === 'edit') {
	    this.displayEditBeer(beerData);
	  }
	}

	displayEditBeer = beerData => {
	  this.setState({
	    editing: true,
	    beerToUpdate: beerData
	  });
	}

	handleRemoveBeer = beerID => {
	  fetch(`/api/beer/${beerID}`, {
	    method: 'DELETE',
	    headers: {
	      'Content-Type': 'application/json'
	    }
	  })
	    .then(response => null)
	    .then(data => {
	      const beerListCopy = [...this.state.beerList];
	      const index = beerListCopy.findIndex(beers => beers.beerID === beerID);
	      beerListCopy.splice(index, 1);
	      this.setState({
	        beerList: beerListCopy
	      });
	      return data;
	    })
	    .catch(error => console.error(error));
	}

	handleEditBeer = beer => {
	  const beerID = beer.beerID;
	  fetch(`/api/beer/${beer.beerID}`, {
	    method: 'PATCH',
	    headers: { 'Content-Type': 'application/json' },
	    body: JSON.stringify(beer)
	  })
	    .then(response => response.json())
	    .then(data => {
	      const beerListCopy = [...this.state.beerList];
	      const index = beerListCopy.findIndex(beer => {
	        return beer.beerID === beerID;
	      });
	      beerListCopy.splice(index, 1, beer);
	      this.setState({
	        beerList: beerListCopy,
	        editing: false
	      });
	    });
	}

	render() {
	  let beerList = <Spinner />;
	  if (this.state.beerListLoaded && this.state.beerList.length === 0) {
	    beerList = <EmptyList setView={this.props.setView} list={'beer'}/>;
	  } else if (this.state.beerListLoaded && this.state.windowWidth <= 769) {
	    beerList = <SmallTable
	      beerList={this.state.beerList}
	      handleEditButton={this.handleEditBeer}
	      setView={this.props.setView}/>;
	  } else if (this.state.beerListLoaded && this.state.windowWidth > 769) {
	    beerList = <LargeTable
	      beerList={this.state.beerList}
	      handleEditButton={this.handleEditBeer}
	      setView={this.props.setView}/>;
	  }
	  return (
	    this.state.editing
	      ? <UpdateBeer
	        beerToUpdate={this.state.beerToUpdate}
	        editBeer={this.handleEditBeer}/>
	      : beerList
	  );
	}
}

export default BeerList;
