import React from 'react'
import Support from '../assets/support.svg'
import Setting from '../assets/setting.svg'
import Chat from '../assets/chat.svg'
import Contact from '../assets/contact.svg'
import Card from './Card'
import SignOut from './SignOut'

function SideCard(props) {
  return (
    <div className={`side-card-hide`}>
        <div className="s-c-user">
        <h1>Kevin Roger</h1>
        </div>
        <div className='s-c-group'>
        <div className="s-c-g-option">
            <img src={Chat} alt="" />
            <h3>Messages</h3>
        </div>
        <div className="s-c-g-option">
            <img src={Contact} alt="" />
            <h3>Contacts</h3>
        </div>
        <div className="s-c-g-option">
            <img src={Setting} alt="" />
            <h3>Settings</h3>
        </div>
        <div className="s-c-g-option">
            <img src={Support} alt="" />
            <h3>Support</h3>
        </div>
        </div>
        <div className="min-convo">
            <Card amount = {5} />
        </div>
        <div className="logOut">
            {/* <SignOut auth={props.auth}/> */}
        </div>
    </div>
  )
}

export default SideCard