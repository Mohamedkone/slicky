import React from 'react';

function Register_two() {
  return (
      <div className='register register2'>
          <div className="r-header">
            <h1>Almost there</h1>
            <h3>Now let's verify your infos</h3>
          </div>
          <div className='r-verify'>
            <button className='r2-btn r-btn '>Verify Email Account</button>
            <button className='r2-btn r-btn'>Verify Phone Number</button>
          </div>
          <div className="r-send-code">
              <h3>By clicking here an emai you will receive a verification code by email</h3>
              <h4>Your email: grads@gassembly.com</h4>
              <button className='r2-btn r-btn'>Send code</button>
          </div>
          <div className="r-received-code">
              <input type='number' maxLength="5"/>
              <button className='r2-btn r-btn'>Verify</button>
          </div>


      </div>
  )
}

export default Register_two;
