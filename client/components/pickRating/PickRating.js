/* eslint-disable no-tabs */
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const pickRating = props => (
  <BeerIcon>
    <FontAwesomeIcon
      icon={faBeer}
      size="sm"
      border
      name="one"
      style={{ backgroundColor: 'yellow' }}
      onClick={props.pickRating}/>
    <FontAwesomeIcon
      icon={faBeer}
      size="sm"
      border
      name="two"
      style={{ backgroundColor: 'yellow' }}
      onClick={props.pickRating}/>
    <FontAwesomeIcon
      icon={faBeer}
      size="sm"
      border
      name="three"
      style={{ backgroundColor: 'yellow' }}
      onClick={props.pickRating}/>
    <FontAwesomeIcon
      icon={faBeer}
      size="sm"
      border
      name="four"
      style={{ backgroundColor: 'yellow' }}
      onClick={props.pickRating}/>
    <FontAwesomeIcon
      icon={faBeer}
      size="sm"
      border
      name="five"
      style={{ backgroundColor: 'yellow' }}
      onClick={props.pickRating}/>
  </BeerIcon>
);

export default pickRating;

const BeerIcon = styled.span`
	width: 200px;
	border: 2px solid;
	border-radius: 6px;
	border-color: rgb(0, 0, 0) rgb(118, 118, 118) rgb(118, 118, 118) rgb(0, 0, 0);
	padding: 6px 12px;
	* {
		margin: 0 3px;
	}
`;
