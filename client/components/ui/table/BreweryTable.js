import React from 'react';
import styled from 'styled-components';

const breweryTable = props => (
  <Table>
    {props.children}
  </Table>
)

export default breweryTable;

const Table = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 24px 0;
`
