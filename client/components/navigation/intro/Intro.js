import React, { Component } from 'react'
import styled from 'styled-components'

class Intro extends Component {

  render() {
    return (
      <IntroDiv>
        <div className="intro">
          <h1>Hooray Beer!</h1>
          <p>Hello there! Do you like craft beer? Then you&apos;re at the right place. With this app, you can log the craft beers you drink, your tasting notes, and where you drank it.</p>
          <p>And remember, it&apos;s only for <b>craft beers</b>, so don&apos;t try to slip in any domestic brands &#128521;</p>
          <p>This app pulls brewery information from the <a target='_blank' rel='noopener noreferrer' href="https://www.openbrewerydb.org/">openbrewerydb api</a>, which only lists craft breweries.</p>
          <p>So let&apos;s get started! &#127866;</p>
          <button onClick={() => this.props.setView('add')}>Click to get started</button>
        </div>
      </IntroDiv>
    )
  }
}

export default Intro

const IntroDiv = styled.div`
	display: flex;
	justify-content: center;
	color: hsl(15, 86%, 30%);
	.intro {
		width: 80%;
	}
	button {
		padding: 6px 12px;
		border-radius: 6px;
		background-color: rgb(0, 144, 247);
		color: rgb(240, 240, 40);
		box-shadow: 0 2px 5px rgb(0, 0, 255);
		font-family: inherit;
		font-size: inherit;
	}
	button:hover {
		background-color: rgb(255, 255, 255);
		color: rgb(0, 0, 255);
	}
	button:active {
		box-shadow: inset -1px 1px 5px rgb(0, 0, 255);
		box-shadow: 0;
	}
	@media (min-width: 600px) {
		.intro {
			width: 500px;
		}
	}
`
