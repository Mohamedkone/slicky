import React from 'react';
import Nav from '../components/Nav'
import option from '../assets/video-camera.svg'
import Chat from '../components/Chat';
import SignOut from '../components/SignOut';

function Message(props) {
    let ok = props.auth
  return (
      <div>
          <Nav title={"Mike Tyson"} option={option}/>
          <Chat auth={props.auth} firestore={props.firestore}/>
          <SignOut auth={ok}/>
      </div>
  )
}

export default Message;
