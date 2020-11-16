import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EmptyList from '../ui/emptyList/EmptyList'
import Spinner from '../ui/spinner/Spinner'
import * as actions from './actions'
import LargeTable from './beerTables/LargeTable'
import SmallTable from './beerTables/SmallTable'

class BeerList extends Component {
  state = {
    windowWidth: null
  }

  componentDidMount() {
	  this.props.getBeerList()
	  this.handleResize()
	  window.addEventListener('resize', this.handleResize)
  }

	handleResize = () => {
	  this.setState({
	    windowWidth: window.innerWidth
	  })
	}

	handleButtonClick = (event, beerData) => {
	  const name = event.target.name
	  if (name === 'remove') {
	    this.props.handleRemoveBeer(beerData)
	  } else if (name === 'edit') {
	    this.displayEditBeer(beerData)
	  }
	}

	displayEditBeer = beerData => {
	  this.props.setEditBeer(beerData)
	  this.props.setView('edit')
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.handleResize)
	}

	render() {
	  const loaded = this.props.beerListLoaded
	  const width = this.state.windowWidth
	  let beerList = <Spinner />
	  if (loaded && width < 520) {
	    beerList = <SmallTable
	      beerList={this.props.beerList}
	      handleButtonClick={this.handleButtonClick}
	      setView={this.props.setView}/>
	  } else if (loaded && width >= 520) {
	    beerList = <LargeTable
	      beerList={this.props.beerList}
	      handleButtonClick={this.handleButtonClick}
	      setView={this.props.setView}/>
	  }
	  if (loaded && this.props.beerList.length === 0) {
	    beerList = <EmptyList setView={this.props.setView} list={'beer'}/>
	  }
	  if (this.props.beerListLoadFail) {
	    beerList = (
	      <>
	        <div>something went wrong</div>
	        <div>please try again later</div>
	      </>
	    )
	  }
	  return beerList
	}
}

const mapStateToProps = state => {
  return {
    beerList: state.beer.beerList,
    beerListLoaded: state.beer.beerListLoaded,
    beerListLoadFail: state.beer.beerListLoadFail,
    beerToEdit: state.beer.beerToEdit,
    error: state.beer.error
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getBeerList: actions.getBeerList,
  handleRemoveBeer: beerID => dispatch(actions.removeBeer(beerID)),
  setEditBeer: beer => dispatch(actions.setEditBeer(beer))
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BeerList)
