import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Register_two() {
  const [info, SetInfo] =useState("")
  const [nbr, SetNbr] =useState()

  useEffect(async ()=>{
        await axios.get('http://localhost:3001/').then(res =>{
            SetInfo(res.data[0].email)
            SetNbr(res.data.length)
          })
        },[])
        let [set,setSet] = useState("disabled")
        const check=()=>{
        set==="disabled"? setSet("") : setSet("disabled")
        }
  return (
      <div className='register register2'>
          <div className="r-header">
            <h1>Almost there</h1>
            <h3>Now let's verify your infos</h3>
          </div>
          <div className='r-verify'>
            <button className='r2-btn r-btn ' onClick={()=>check()}>Verify Email Account</button>
            <button className='r2-btn r-btn'>Verify Phone Number</button>
          </div>
          {set===""?<div className="r-send-code">
              <h3>By clicking here an emai you will receive a verification code by email</h3>
              <h4>Your email: {info}</h4>
              <button className='r2-btn r-btn'>Send code</button>
          </div>:""}
          <div className="r-received-code">
              <input type='number' maxLength="5"/>
              <button className='r2-btn r-btn'>Verify</button>
          </div>


      </div>
  )
}

export default Register_two;
