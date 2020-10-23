import React from 'react';
import styled from 'styled-components';

const navigation = props => (
  <>
    <Navigation>
      <ul>
        <li>
          <button onClick={() => props.setView('beerList')}>My Beers List</button>
        </li>
        <li>
          <button onClick={() => props.setView('add')}>Add New Beer</button>
        </li>
        <li>
          <button onClick={() => props.setView('brewery')}>Breweries</button>
        </li>
        {/* <li>
          <button onClick={() => props.setView('favorites')}>Favorites</button>
        </li>
        <li>
          <button onClick={() => props.setView('noLikes')}>No Likes</button>
        </li> */}
      </ul>
    </Navigation>
  </>
);

export default navigation;

const Navigation = styled.div`
padding: 0 16px;
display: flex;
flex-direction: column;

ul {
list-style: none;
display: flex;
margin: 0;
padding: 0;
justify-content: space-between;
}
`;
