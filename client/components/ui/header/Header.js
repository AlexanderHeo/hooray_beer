/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import Navigation from '../../navigation/Navigation';

const header = props => (
  <Header>
    <div className="logo">
      <h1>Hooray Beer!</h1>
    </div>
    <div className="naviContainer">
      <Navigation
        setView={props.setView}
        active={props.active}/>
    </div>
  </Header>
);

export default header;

const Header = styled.div`
	border-bottom: 2px solid rgb(118, 118, 118);
	display: flex;
	justify-content: center;
	padding: 10px 10px 16px;
	h1 {
		min-width: 220px;
		padding: 0;
		margin: 0;
		text-transform: uppercase;
		letter-spacing: -0.2px;
	}
	.logo{
		margin-left: 6px;
		width: 20%;
	}
	.naviContainer {
		margin-right: 6px;
		width: 80%;
		display: flex;
		align-items: flex-end;
	}
	@media (max-width: 597px) {
		flex-direction: column;
		h1 {
			font-size: 24px;
		}
		.logo {
			width: 100%;
		}
		.naviContainer {
			width: 100%;
		}
	}
`;
