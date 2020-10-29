import React from 'react';

const searchBreweryFail = props => {
  return (
    <>
      <div>try again</div>
      <div>there is no brewery by that name</div>
      <button onClick={() => props.setView('add')}>Return</button>
      <button onClick={() => props.setView('beerList')}>Beer List</button>
    </>
  );
};

export default searchBreweryFail;
