import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import ProgressBar from 'react-bootstrap/ProgressBar'

function Register_one() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState("")
    const [passwordVer, setPasswordVer] = useState("")
    const [avatar, setAvatar] = useState("")
    const progress = 20
    // const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     const files = Array.from(e.target.files)
    //     console.log("files:", files)
    //   }
  return (
      <form action="" className='register1'>
          <div className="r-header">
          <h1>Hi, Welcome on Slick</h1>
          <h3>Let's Set up your slicky Profile</h3>
          <ProgressBar animated striped now={progress} label={`${progress}%`} />
          </div>
            <div className="r-field">
                <label htmlFor="">Fisrt Name</label>
                <input className='' type="text" value={firstName} onChange={()=>setFirstName()} />
                <span className="requiered">This is requiered</span>
            </div>
            <div className="r-field">
                <label htmlFor="">Last Name</label>
                <input className='' type="text" value={lastName} onChange={()=>setLastName()} />
                <span className="requiered">This is requiered</span>
            </div>
            <div className="r-field">
                <label htmlFor="">Email</label>
                <input className='' type="text" value={email} onChange={()=>setEmail()} />
                <span className="requiered">This is requiered</span>
            </div>
            <div className="r-field r-field-special">
                <label htmlFor="">Phone Number</label>
                <PhoneInput
                international
                countryCallingCodeEditable= {false}
                defaultCountry= "US"
                placeholder="Enter numeber"
                value={phone}
                onChange={()=>setPhone()}
                maxLength={16} 
                />
                <span className="requiered">This is requiered</span>
            </div>
            <div className="r-field">
                <label htmlFor="">Create Password</label>
                <input className='' type="text" value={password} onChange={()=>setPassword()} />
                <span className="requiered">This is requiered</span>
            </div>
            <div className="r-field">
                <label htmlFor="">Verify Password</label>
                <input className='' type="text" value={passwordVer} onChange={()=>setPasswordVer()} />
                <span className="requiered">This is requiered</span>
            </div>
            <div className="r-field">
                <label htmlFor="file" className='r-upload'>Choose Profile image</label>
                <input className='r-r-f-import' type="file" name="file"/>
                <span className="requiered"></span>
            </div>
            <button className='r-form-next r-btn' type="submit">Next &#8680;</button>
      </form> 
  )
}

export default Register_one;
