import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ratingDisplay = props => {
  return (<span>
    <FontAwesomeIcon icon={faStar} size="sm" />
  </span>);
};

export default ratingDisplay;
