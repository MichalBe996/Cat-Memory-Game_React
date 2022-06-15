
import React from 'react'

function Header(props) {
    return (
        <div className="header">
          <h1 className="headerText">Memory Game</h1>
          <h3 className="playerPoints">Your points: {props.current}</h3>
          <h3 className="playerBest">Player best: {props.best}</h3>
          <h5> Click an image that you haven't clicked yet!</h5>
        </div>
      )
}

export default Header
