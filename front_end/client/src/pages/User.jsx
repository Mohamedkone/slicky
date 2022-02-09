import React from 'react';
import Nav from '../components/Nav';
import Register_one from '../components/Register_one'
import Dots from '../assets/dots.svg'

function User(props) {
  return (
      <div>
          <Nav title={"Registering"} option={Dots} />
            <Register_one />
      </div>
  )
}

export default User;
