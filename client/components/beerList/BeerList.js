import React from 'react';
import styled from 'styled-components';
import Beer from './Beer';

const tempBeerList = [
  {
    beerId: 1,
    name: 'Sculpin',
    brewery: 'Beachwood',
    rating: 5,
    notes: 'flavorful hazy ipa',
    bar: 'Beachwood'
  },
  {
    beerId: 2,
    name: 'Nobility',
    brewery: 'Noble Ale Works',
    rating: 5,
    notes: 'full bodied double ipa',
    bar: 'Noble Ale Works'
  }
];

const beerList = () => (
  <Table>
    <thead>
      <tr>
        <th>Beer</th>
        <th>Brewery</th>
        <th>Rating</th>
        <th>Notes</th>
        <th>Bar</th>
      </tr>
    </thead>
    <tbody>
      {tempBeerList.map(beer => (
        <Beer beer={beer} key={beer.beerId}/>
      ))}
    </tbody>
  </Table>
);

export default beerList;

const Table = styled.table`
width: 100%;
* {
border: 1px solid black;
border-radius: 6px;
padding: 6px 12px;
}
`;
