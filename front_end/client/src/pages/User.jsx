import React from 'react';
import Nav from '../components/Nav';
import Register_one from '../components/Register_one'
import Dots from '../assets/dots.svg'
import Register_two from '../components/Register_two';

function User(props) {
  return (
      <div>
          <Nav title={"Registering"} option={Dots} />
            {/* <Register_one /> */}
            <Register_two />
      </div>
  )
}

export default User;
