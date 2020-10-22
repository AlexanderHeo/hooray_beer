/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';
import Beer from './Beer';

class BeerList extends Component {
  state = {
    beerList: []
  }

  componentDidMount() {
    this.getBeerList();
  }

  getBeerList = () => {
    fetch('/api/beer-list')
      .then(response => response.json())
      .then(data => this.setState({ beerList: data }))
      .catch(error => console.error(error));
  }

  render() {
	  return (
	    <Table>
	      <thead>
	        <tr>
	          <th>Beer</th>
	          <th>Brewery</th>
	          <th>Rating</th>
	          <th>Notes</th>
	          <th>Bar</th>
	        </tr>
	      </thead>
	      <tbody>
	        {this.state.beerList.map(beer => (
	          <Beer beer={beer} key={beer.beerID}/>
	        ))}
	      </tbody>
	    </Table>
	  );
  }
}

export default BeerList;

const Table = styled.table`
	width: 100%;
	th, td {
	border: 1px solid black;
	border-radius: 6px;
	padding: 6px 12px;
	}
`;
