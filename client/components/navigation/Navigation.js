import React from 'react';
import styled from 'styled-components';

const navigation = () => (
  <>
    <Navigation>
      <ul>
        <li>
          <button>My Beers List</button>
        </li>
        <li>
          <button>Breweries</button>
        </li>
        <li>
          <button>Wish List</button>
        </li>
        <li>
          <button>Favorites</button>
        </li>
        <li>
          <button>No Likes</button>
        </li>
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
