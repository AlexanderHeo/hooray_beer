/* eslint-disable no-tabs */
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const ratingDisplay = props => {
  return (<BeerIcon>
    <FontAwesomeIcon icon={faBeer} size="sm" style={{ backgroundColor: 'yellow' }} border/>
  </BeerIcon>);
};

export default ratingDisplay;

const BeerIcon = styled.span`
	margin-right: 3px;
`;
