import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EmptyList from '../ui/emptyList/EmptyList'
import Spinner from '../ui/spinner/Spinner'
import { getBreweryList } from './actions'
import LargeTable from './breweryTables/LargeTable'
import MediumTable from './breweryTables/MediumTable'
import SmallTable from './breweryTables/SmallTable'

class BreweryList extends Component {
	state = {
	  windowWidth: null
	}

	handleResize = () => {
	  this.setState({
	    windowWidth: window.innerWidth
	  })
	}

	componentDidMount() {
	  this.props.getBreweryList()
	  this.handleResize()
	  window.addEventListener('resize', this.handleResize)
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.handleResize)
	}

	render() {
	  let breweryList = <Spinner />
	  const loaded = this.props.breweryListLoaded
	  const width = this.state.windowWidth
	  if (loaded) {
	    breweryList = <LargeTable
	      breweryList={this.props.breweryList} />
	  }
	  if (loaded && width < 878) {
	    breweryList = <MediumTable
	      breweryList={this.props.breweryList} />
	  }
	  if (loaded && width < 501) {
	    breweryList = <SmallTable
	      breweryList={this.props.breweryList} />
	  }
	  if (loaded && this.props.breweryList.length === 0) {
	    breweryList = <EmptyList setView={this.props.setView} list={'brewery'} />
	  }
	  if (this.props.breweryListLoadFail) {
	    breweryList = (
	      <>
	        <div>Something went wrong</div>
	        <div>Please try again</div>
	      </>
	    )
	  }
	  return breweryList
	}
}

const mapStateToProps = state => {
  return {
    breweryList: state.breweryReducer.breweryList,
    breweryListLoaded: state.breweryReducer.breweryListLoaded,
    breweryListLoadFail: state.breweryReducer.breweryListLoadFail
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getBreweryList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BreweryList)
