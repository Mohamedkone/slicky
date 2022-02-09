import React from 'react';
import Nav from '../components/Nav';
import Register from '../components/Register'
import Dots from '../assets/dots.svg'

function User(props) {
  return (
      <div>
          <Nav title={"Username"} option={Dots} />
            <Register />
      </div>
  )
}

export default User;
