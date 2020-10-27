/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';
import Navigation from '../../navigation/Navigation';

const header = props => (
  <Header>
    <Logo>
      <h1>Hooray Beer!</h1>
    </Logo>
    <NaviContainer>
      <Navigation setView={props.setView}/>
    </NaviContainer>
  </Header>
);

export default header;

const Header = styled.div`
	display: flex;
	h1 {
		padding: 0;
		margin: 0;
	}
`;

const Logo = styled.div`
	margin-left: 6px;
	width: 20%;
`;

const NaviContainer = styled.div`
	margin-right: 6px;
	width: 80%;
	display: flex;
	align-items: center;
`;
