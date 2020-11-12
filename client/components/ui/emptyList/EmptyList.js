import { faBeer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const emptyList = props => (
  <EmptyList>
    <div className="emptyContainer">
      <FontAwesomeIcon
        className="icon"
        icon={faBeer}
        size="lg"
        style={{ backgroundColor: 'yellow' }}
        border/>
      <div>Hmmmm, the {props.list} list seems to be empty.</div>
      <div>Let&aposs get started and add your first beer!</div>
      <button
        onClick={() => props.setView('add')}
        className="addButton">Add New Beer</button>
    </div>
  </EmptyList>
)

export default emptyList

const EmptyList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 24px 0;
	.emptyContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 200px;
		border: 2px solid rgb(118, 118, 118);
		border-radius: 12px;
		box-shadow: 0 3px 5px rgb(118, 118, 118), 0 10px 25px rgb(118, 118, 118);
		padding: 12px 24px;
	}
	.icon {
		border-radius: 6px;
		margin: 0 0 12px 0;
	}
	div {
		line-height: 24px;
	}
	.addButton {
		border: 2px solid transparent;
		border-radius: 6px;
		background-color: rgb(0, 144, 247);
		color: rgb(240, 240, 40);
		box-shadow: 0 2px 5px rgb(0, 0, 255);
		padding: 6px 12px;
		margin: 12px 0;
		outline: none;
	}
	.addButton:hover {
		border: 2px solid rgb(0, 144, 247);
		background-color: rgb(255, 255, 255);
		color: rgb(0, 0, 255);
	}
	.addButton:active {
		box-shadow: inset -1px 1px 5px rgb(0, 0, 255);
		box-shadow: 0;
	}
`
