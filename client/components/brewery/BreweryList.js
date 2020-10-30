/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';
import EmptyList from '../ui/emptyList/EmptyList';
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
	  if (this.state.breweryListLoaded && this.state.breweryList.length === 0) {
	    breweryList = <EmptyList setView={this.props.setView} list={'brewery'} />;
	  } else if (this.state.breweryListLoaded) {
	    breweryList = (
	      <Table>
	        <table>
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
	        </table>
	      </Table>
	    );
	  }

	  return breweryList;
	}
}

export default BreweryList;

const Table = styled.div`
	display: flex;
	justify-content: center;
	margin: 24px 0;
	table {
		border: 2px solid transparent;
		border-radius: 12px;
		box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
		padding: 10px 0;
		width: 80%;
		tr:nth-child(even) {
			background-color: rgb(200, 200, 200);
	}
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
