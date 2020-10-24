/* eslint-disable no-tabs */
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import styled from 'styled-components';

const icons = [['one'], ['two'], ['three'], ['four'], ['five']];

class PickRating extends Component {
  render() {
    return (
      <BeerIcon>
        {icons.map(icon => {
          const name = icon[0];
          return (
            <div
              style={{ display: 'inline-block' }}
              key={name}
              name={name}
              onClick={event => this.props.pickRating(event)}>
              <FontAwesomeIcon
                icon={faBeer}
                size="sm"
                border
                style={{ backgroundColor: 'yellow' }}/>
            </div>);
        })}
      </BeerIcon>
    );
  }
}

export default PickRating;

const BeerIcon = styled.div`
	width: 200px;
	border: 2px solid;
	border-radius: 6px;
	border-color: rgb(0, 0, 0) rgb(118, 118, 118) rgb(118, 118, 118) rgb(0, 0, 0);
	padding: 6px 12px;
	* {
		margin: 0 3px;
	}
`;
