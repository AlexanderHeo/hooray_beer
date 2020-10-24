/* eslint-disable no-tabs */
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import styled from 'styled-components';

const icons = [['one'], ['two'], ['three'], ['four'], ['five']];

class PickRating extends Component {
  shouldComponentUpdate(nextProps) {
    console.log(this.props.rating);
    console.log(nextProps.rating);
    if (this.props.rating !== nextProps.rating) {
      console.log('if');
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <BeerIcon>
        {icons.map(icon => {
          const name = icon[0];
          return (
            <Icon
              key={name}
              name={name}
              onClick={event => this.props.pickRating(event)}>
              <FontAwesomeIcon
                icon={faBeer}
                size="sm"
                border/>
            </Icon>);
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
display: flex;

* {
	margin: 0 3px;
	}
`;

const Icon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2px 0;

	&:${props => props.rating} {
		background-color: rgb(242, 142, 28);
	}
`;
