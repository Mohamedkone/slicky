import React from 'react';
import Burger from '../assets/menu.svg'
import SignOut from './SignOut';
function Nav(props) {
  return (
      <nav>
          <div className="burger"><img src={Burger} alt="" /></div>
          <h2>{props.title}</h2>
          <div className="option1"><img src={props.option} alt="" /></div>
      </nav>
  )
}

export default Nav;
