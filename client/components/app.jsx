import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as viewActionCreator from './actions'
import AddBeer from './beer/addBeer/AddBeerData'
import BeerList from './beer/BeerList'
import UpdateBeer from './beer/updateBeer/UpdateBeer'
import Intro from './navigation/intro/Intro'
import Header from './ui/header/Header'

const app = props => {
  let component = <Intro setView={props.setView}/>
  const view = props.view
  if (view === 'beerList') {
    component = <BeerList setView={props.setView}/>
  } else if (view === 'add') {
    component = <AddBeer setView={props.setView}/>
  } else if (view === 'edit') {
    component = <UpdateBeer setView={props.setView}/>
  }

  return (
    <>
      <Background />
      <Header setView={props.setView} view={props.view}/>
      {component}
    </>
  )
}

const mapStateToProps = state => {
  return {
    view: state.view.view
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setView: view => dispatch(viewActionCreator.setView(view))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(app)

const Background = styled.div`
	position: absolute;
	z-index: -500;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(60deg,hsl(49, 100%, 96%), hsl(48, 95%, 76%), hsl(49, 100%, 96%));
`;
