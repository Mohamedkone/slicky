import React, { useState } from 'react';

function Register() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVer, setPasswordVer] = useState("")
    const [avatar, setAvatar] = useState("")
  return (
      <form action="" className='register'>
            <div className="r-field">
                <label htmlFor="">Fisrt Name</label>
                <input className='' type="text" value={firstName} onChange={()=>setFirstName()} />
                <span className="requiered"></span>
            </div>
            <div className="r-field">
                <label htmlFor="">Last Name</label>
                <input className='' type="text" value={lastName} onChange={()=>setLastName()} />
                <span className="requiered"></span>
            </div>
            <div className="r-field">
                <label htmlFor="">Email</label>
                <input className='' type="text" value={email} onChange={()=>setEmail()} />
                <span className="requiered"></span>
            </div>
            <div className="r-field">
                <label htmlFor="">Phone Number</label>
                <input className='' type="text" value={phone} onChange={()=>setPhone()} />
                <span className="requiered"></span>
            </div>
            <div className="r-field">
                <label htmlFor="">Create Password</label>
                <input className='' type="text" value={password} onChange={()=>setPassword()} />
                <span className="requiered"></span>
            </div>
            <div className="r-field">
                <label htmlFor="">Verify Password</label>
                <input className='' type="text" value={passwordVer} onChange={()=>setPasswordVer()} />
                <span className="requiered"></span>
            </div>
            <div className="r-field">
                <label htmlFor="">Avatar</label>
                <input type="file" value={avatar} onChange={()=>setAvatar()}/>
                <span className="requiered"></span>
            </div>
      </form>
  )
}

export default Register;
