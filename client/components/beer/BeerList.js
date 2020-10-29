/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import styled from 'styled-components';
import Spinner from '../ui/spinner/Spinner';
import Beer from './Beer';
import BeerListEmpty from './BeerListEmpty';
import UpdateBeer from './updateBeer/UpdateBeer';

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
	  if (this.state.beerList.length === 0) {
	    beerList = <BeerListEmpty setView={this.props.setView}/>;
	  } else if (this.state.beerListLoaded) {
	    beerList = (
	      <Table>
	        <table>
	          <colgroup>
	            <col style={{ width: '25%' }} />
	            <col style={{ width: '50%' }} />
	            <col style={{ width: '25%' }} />
	          </colgroup>
	          <tbody>
	            {this.state.beerList.map(beer => (
	              <Beer
	                beer={beer}
	                key={beer.beerID}
	                setView={this.props.setView}
	                addBeerButtonClick={(event, beer) => this.handleEditButton(event, beer)}/>
	            ))}
	          </tbody>
	        </table>
	      </Table>
	    );
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

const Table = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 24px 0;
	tr:nth-child(8n+1),
	tr:nth-child(8n+2),
	tr:nth-child(8n+3),
	tr:nth-child(8n+4) {
		background-color: rgb(235, 235, 235);
	}
	table {
		border: 2px solid transparent;
		border-radius: 12px;
		box-shadow: 0 3px 5px rgb(70, 70, 70), 0 10px 25px rgb(120, 120, 120);
		padding: 10px 0;
		width: 80%;
		border-spacing: 2px 0;
	}
	th {
		border-bottom: 2px solid;
		border-color: rgb(118, 118, 118);
		background-color: rgba(255, 255, 255);
	}
	th, td {
		padding: 6px 12px;
	}
	th:first-of-type {
		border-top-left-radius: 12px;
	}
	th:last-of-type {
		border-top-right-radius: 12px;
	}
`;
