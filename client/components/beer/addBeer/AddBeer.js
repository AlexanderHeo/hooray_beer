import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as breweryActions from '../../brewery/actions'
import Spinner from '../../ui/spinner/Spinner'
import AddBeerData from './AddBeerData'
import AddBreweryFromList from './AddBreweryFromList'
import AddBreweryFromQuery from './AddBreweryFromQuery'
import SearchBreweryFail from './SearchBreweryFail'
import SearchForBrewery from './SearchForBrewery'

class AddBeer extends Component {
	state = {
	  	brewery: {},
	  	breweryAdded: false,
	  searchBreweryList: [],
	  searchBreweryLoaded: false,
	  searchBreweryFail: false,
	  beerData: {
	    name: '',
	    rating: 0,
	    note: '',
	    bar: ''
	  },
	  beerAdded: false
	}

	componentDidMount() {
	  this.props.getBreweryList()
	}

	addBreweryFromList = breweryData => {
	  this.setState({
	    brewery: breweryData,
	    breweryAdded: true
	  })
	}

	searchBrewery = breweryName => {
	  fetch(`https://api.openbrewerydb.org/breweries/search?query=${breweryName}`)
	    .then(response => response.json())
	    .then(data => {
	      if (data.length === 0) {
	        this.setState({
	          searchBreweryFail: true
	        })
	      }
	      this.setState({
	        searchBreweryList: data,
	        searchBreweryLoaded: true
	      })
	    })
	}

	addBreweryFromQuery = breweryData => {
	  const brewery = {
	    breweryID: breweryData.id,
	    name: breweryData.name,
	    city: breweryData.city,
	    state: breweryData.state,
	    link: breweryData.website_url
	  }
	  fetch('/api/brewery', {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(brewery)
	  })
	    .then(response => response.json())
	    .then(data => {
	      this.setState({
	        brewery: brewery,
	        breweryAdded: true
	      })
	    })
	}

	addBeerData = beerData => {
	  beerData.breweryID = this.state.brewery.breweryID
	  fetch('/api/beer', {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(beerData)
	  })
	    .then(response => response.json())
	    .then(data => this.handleReset())
	}

	handleReset = () => {
	  this.setState({
	    breweryList: [],
	    breweryListLoaded: false,
	    brewery: {},
	    breweryAdded: false,
	    searchBreweryList: [],
	    searchBreweryLoaded: false,
	    searchBreweryFail: false,
	    beerData: {
	      name: '',
	      rating: 0,
	      note: '',
	      bar: ''
	    },
	    beerAdded: false
	  })
	  this.props.setView('beerList')
	}

	handleFail = () => {
	  this.props.setView('fail')
	}

	render() {
	  let breweryList = <Spinner />
	  if (this.props.breweryListLoaded) {
	    breweryList = (
	      <AddBreweryContainer>
	        <AddBreweryFromList
	          brewery={this.props.breweryList}
	          addBreweryFromList={this.addBreweryFromList}/>
	        <SearchForBrewery
	          search={this.searchBrewery}
	          setView={this.props.setView}/>
	      </AddBreweryContainer>
	    )
	  } else if (this.props.breweryListLoadFail) {
	    breweryList = (
	      <>
	        <div>something went wrong</div>
	        <div>please try again</div>
	      </>
	    )
	  }
	  if (this.state.searchBreweryLoaded && !this.state.searchBreweryFail) {
	    breweryList = (
	      <AddBreweryFromQuery
	        brewery={this.state.searchBreweryList}
	        addFromQuery={this.addBreweryFromQuery}/>
	    )
	  } else if (this.state.searchBreweryLoaded && this.state.searchBreweryFail) {
	    breweryList = <SearchBreweryFail setView={this.props.setView}/>
	  }
	  if (this.state.breweryAdded) {
	    breweryList = (
	      <AddBeerData
	        brewery={this.state.brewery}
	        addBeerData={this.addBeerData}
	        setView={this.props.setView}/>
	    )
	  }
	  return (
	    <AddBreweryContainer>
	      { breweryList }
	    </AddBreweryContainer>
	  )
	}
}

const mapStateToProps = state => {
  return {
    breweryList: state.breweryReducer.breweryList,
    breweryListLoaded: state.breweryReducer.breweryListLoaded,
    breweryListLoadFail: state.breweryReducer.breweryListLoadFail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBreweryList: () => dispatch(breweryActions.getBreweryList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBeer)

const AddBreweryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
