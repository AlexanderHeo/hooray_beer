/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import { connect } from 'react-redux';
import * as viewActionCreator from '../store/action/view';
import AddBeer from './beer/addBeer/AddBeer';
import SearchBreweryFail from './beer/addBeer/SearchBreweryFail';
import BeerList from './beer/BeerList';
import UpdateBeer from './beer/updateBeer/UpdateBeer';
import BreweryList from './brewery/BreweryList';
import Intro from './navigation/intro/Intro';
import Header from './ui/header/Header';

const app = props => {
  let component = <Intro setView={props.setView}/>;
  const view = props.view;
  if (view === 'beerList') {
    component = <BeerList setView={props.setView}/>;
  } else if (view === 'add') {
    component = <AddBeer setView={props.setView}/>;
  } else if (view === 'brewery') {
    component = <BreweryList setView={props.setView}/>;
  } else if (view === 'fail') {
    component = <SearchBreweryFail setView={props.setView}/>;
  } else if (view === 'edit') {
    component = <UpdateBeer setView={props.setView}/>;
  }

  return (
    <>
      <Header setView={props.setView}/>
      {component}
    </>
  );
};

const mapStateToProps = state => {
  return {
    view: state.viewReducer.view
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setView: view => dispatch(viewActionCreator.setView(view))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(app);
