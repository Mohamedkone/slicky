import React, { useEffect, useState } from 'react';
import axios from 'axios'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';

function Register_one() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState("")
    const [passwordVer, setPasswordVer] = useState("")
    const [avatar, setAvatar] = useState("")
    const [user, setUser] = useState("")

        axios.post("http://localhost:3001/")
    useEffect(()=>{
        axios.get('http://localhost:3001/').then(res =>{
            setUser(res.data[0].firstname)
          })
        },[])
  return (
      <form method='POST' action={"/"} className='register register1'>
          <div className="r-header">
          <h1>Hi, Welcome on Slick {user}</h1>
          <h3>Let's Set up your slicky Profile</h3>
          </div>
            <div className="r-field">
                <label htmlFor="">Fisrt Name</label>
                <input className='' type="text" name='firstname'  />
                <span className="requiered hide">This is requiered</span>
            </div>
            <div className="r-field">
                <label htmlFor="" name="lastname">Last Name</label>
                <input className='' type="text" />
                <span className="requiered hide">This is requiered</span>
            </div>
            <div className="r-field">
                <label htmlFor="">Email</label>
                <input className='' type="text" name="email"  />
                <span className="requiered hide">This is requiered</span>
            </div>
            <div className="r-field r-field-special">
                <label htmlFor="">Phone Number</label>
                <PhoneInput
                international
                countryCallingCodeEditable= {false}
                defaultCountry= "RU"
                placeholder="Enter numeber"
                value={phone}
                onChange={()=>setPhone()}
                maxLength={16}
                name="number" 
                />
                <span className="requiered hide">This is requiered</span>
            </div>
            <div className="r-field">
                <label htmlFor="">Create Password</label>
                <input className='' type="text" name='password' />
                <span className="requiered hide">This is requiered</span>
            </div>
            <div className="r-field">
                <label htmlFor="">Verify Password</label>
                <input className='' type="text" />
                <span className="requiered hide">This is requiered</span>
            </div>
            <button type="submit">click</button>
            <div className="r-field">
                <label htmlFor="file" className='r-upload' >Choose Profile image</label>
                <input className='r-r-f-import' type="file" name="file"/>
                <span className="requiered hide"></span>
            </div>
            
      </form> 
  )
}

export default Register_one;
