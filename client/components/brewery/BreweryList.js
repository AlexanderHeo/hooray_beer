/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';
import Spinner from '../ui/spinner/Spinner';
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
	  fetch('/api/brewery')
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
	          {this.state.breweryList.map(brewery => {
	            return <Brewery
	              brewery={brewery}
	              key={brewery.breweryID}
	              buttonClick={this.handleButtonClick}
	            />;
	          })}
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
	tr:nth-child(even) {
		background-color: rgb(200, 200, 200);
	}
	th {
		border-bottom: 2px solid;
		border-color: rgba(118, 118, 118);
		background-color: rgb(255, 255, 255);
	}
	th, td {
		padding: 6px 12px;
	}
`;
