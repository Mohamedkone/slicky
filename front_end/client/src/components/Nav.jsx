import React from 'react';
import Burger from '../assets/menu.svg'
import SignOut from './SignOut';
function Nav(props) {
    let decision = props.decision
  return (
      <nav>
          {decision?<div className="burger"><img src={Burger} alt="" /></div>:<div></div>}
          <h2>{props.title}</h2>
          {decision?<div className="option1"><img src={props.option} alt="" /></div>:<div></div>}
      </nav>
  )
}

export default Nav;
