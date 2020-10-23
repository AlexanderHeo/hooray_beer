/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';
import Brewery from './Brewery';

const tempBreweryList = [
  {
    breweryID: 3419,
    name: "Bell's",
    city: 'Galesburg',
    state: 'Michigan',
    link: 'http://www.bellsbeer.com'
  },
  {
    breweryID: 8249,
    name: 'Beachwood',
    city: 'Huntington Beach',
    state: 'California',
    link: 'http://www.beachwoodbrewing'
  }
];

class BreweryList extends Component {
	state = {
	  breweryList: []
	}

	componentDidMount() {
	  this.getBreweryList();
	}

	getBreweryList = () => {
	  fetch('/api/brewery-list')
	    .then(response => response.json())
	    .then(data => this.setState({ breweryList: data }))
	    .catch(error => console.error(error));
	}

	render() {
	  return (
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
}

export default BreweryList;

const Table = styled.table`
	width: 100%;
	th, td {
	border: 1px solid black;
	border-radius: 6px;
	padding: 6px 12px;
	}
`;
