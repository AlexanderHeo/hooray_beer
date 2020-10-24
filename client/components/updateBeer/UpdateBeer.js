/* eslint-disable no-tabs */
import React from 'react';
import styled from 'styled-components';

const updateBeer = props => {
  console.log(props);
  return (
    <UpdateModal>
      <h3>Update {props.beerToUpdate.name}</h3>
      <Form>
        <fieldset>
          <label>Rating: </label>
          <input type="number" />
          <label>Note: </label>
          <input type="text" />
          <label>Bar: </label>
          <input type="text" />
        </fieldset>
      </Form>
    </UpdateModal>
  );
};

export default updateBeer;

const UpdateModal = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	text-align: center;
	z-index: 5;
	background-color: rgba(0, 0, 0, 0.25);
`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

fieldset {
	margin: 6px;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
}
label {
	display: inline-block;
	text-align: center;
	margin: 6px 0;
	vertical-align: top;
	border-radius: 6px;
}
input {
	padding: 6px 12px;
	border-radius: 6px;
}
input, textarea {
	width: 200px;
}
select {
	width: 208px;
}
.button-container {
	margin: 6px 0;
}
`;
