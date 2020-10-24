/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/Spinner';
import UpdateBeer from '../updateBeer/UpdateBeer';
import Beer from './Beer';

class BeerList extends Component {
  state = {
    beerList: [],
    beerListLoaded: false,
    editing: false,
    beerToUpdate: []
  }

  componentDidMount() {
    this.getBeerList();
  }

  getBeerList = () => {
    fetch('/api/beer-list')
      .then(response => response.json())
      .then(data => this.setState({
        beerList: data,
        beerListLoaded: true
      }))
      .catch(error => console.error(error));
  }

	handleEditBeer = (event, beerData) => {
	  const name = event.target.name;
	  if (name === 'remove') {
	    this.removeBeer(beerData);
	  } else if (name === 'edit') {
	    this.displayEditBeer(beerData);
	  }
	}

	displayEditBeer = beerData => {
	  this.setState({ editing: true, beerToUpdate: beerData });
	}

	removeBeer = beerID => {
	  fetch(`/api/remove-beer/${beerID}`, {
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

	editBeer = beer => {
	  const beerID = beer.beerID;
	  fetch(`/api/edit-beer/${beer.beerID}`, {
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
	      beerListCopy.splice(index, 1, data);
	      this.setState({
	        beerList: beerListCopy,
	        editing: false
	      });
	    });
	}

	render() {
	  let beerList = <Spinner />;
	  if (this.state.beerListLoaded) {
	    beerList = (
	      <Table>
	        <colgroup>
	          <col span="1" style={{ width: '10%' }} />
	          <col span="1" style={{ width: '15%' }} />
	          <col span="1" style={{ width: '12%' }} />
	          <col span="1" style={{ width: '20%' }} />
	          <col span="1" style={{ width: '15%' }} />
	          <col span="1" style={{ width: '15%' }} />
	        </colgroup>
	        <thead>
	          <tr>
	            <th>Beer</th>
	            <th>Brewery</th>
	            <th>Rating</th>
	            <th>Notes</th>
	            <th>Bar</th>
	            <th>Edit</th>
	          </tr>
	        </thead>
	        <tbody>
	          {this.state.beerList.map(beer => (
	            <Beer
	              beer={beer}
	              key={beer.beerID}
	              addBeerButtonClick={this.handleEditBeer}/>
	          ))}
	        </tbody>
	      </Table>
	    );
	  }
	  return (
	    this.state.editing
	      ? <UpdateBeer
	        beerToUpdate={this.state.beerToUpdate}/>
	      : beerList
	  );
	}
}

export default BeerList;

const Table = styled.table`
	width: 100%;
	tr:nth-child(even) {
		background-color: rgb(200, 200, 200);
	}
	th {
		border-bottom: 2px solid;
		border-color: rgb(118, 118, 118);
		background-color: rgba(255, 255, 255);
	}
	th, td {
		padding: 6px 12px;
	}
`;
