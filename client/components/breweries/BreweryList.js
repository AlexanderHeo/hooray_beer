/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/Spinner';
import Brewery from './Brewery';

class BreweryList extends Component {
	state = {
	  breweryList: [],
	  breweryListLoaded: false
	}

	componentDidMount() {
	  this.getBreweryList();
	}

	getBreweryList = () => {
	  fetch('/api/brewery-list')
	    .then(response => response.json())
	    .then(data => this.setState({ breweryList: data, breweryListLoaded: true }))
	    .catch(error => console.error(error));
	}

	render() {
	  let breweryList = <Spinner />;
	  if (this.state.breweryListLoaded) {
	    breweryList = (
	      <Table>
	        <thead>
	          <tr>
	            <th>Name</th>
	            <th>Location</th>
	            <th>Link</th>
	          </tr>
	        </thead>
	        <tbody>
	          {this.state.breweryList.map(brewery => <Brewery brewery={brewery} key={brewery.breweryID} />)}
	        </tbody>
	      </Table>
	    );
	  }

	  return breweryList;
	}
}

export default BreweryList;

const Table = styled.table`
	width: 100%;
	th, td {
		border: 1px solid;
		border-color: rgb(0, 0, 0) rgb(118, 118, 118) rgb(118, 118, 118) rgb(0, 0, 0);
		border-radius: 6px;
		padding: 6px 12px;
	}
	th {
		background-color: #333;
		color: #ccc;
	}
`;
