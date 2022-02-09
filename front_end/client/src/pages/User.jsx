import React from 'react';
import Nav from '../components/Nav';
import Register_one from '../components/Register_one'
import Dots from '../assets/dots.svg'
import Register_two from '../components/Register_two';
import Register_three from '../components/Register_three';
import ProgressBar from 'react-bootstrap/ProgressBar'


function User(props) {
  let progress = 20

  return (
      <div className='register1'>
          <Nav title={"Registering"} option={Dots} />
          <ProgressBar animated striped now={progress} label={`${progress}%`} />
            {/* <Register_one /> */}
            {/* <Register_two /> */}
            <Register_three />

            <button className='r-form-next r-btn' type="submit">Next &#8680;</button>
      </div>
  )
}

export default User;
