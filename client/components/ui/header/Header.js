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
	border-bottom: 2px solid rgb(118, 118, 118);
	padding: 10px 10px 16px;
	display: flex;
	h1 {
		min-width: 188px;
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
	align-items: flex-end;
`;
