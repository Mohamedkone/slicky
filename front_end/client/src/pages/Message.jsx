import React , { createContext, useContext} from 'react';
import Nav from '../components/Nav'
import option from '../assets/video-camera.svg'
import Chat from '../components/Chat';
import SignOut from '../components/SignOut';

function Message(props) {
    let ok = props.auth
  return (
      <div>
          <Chat auth={props.auth} firestore={props.firestore}/>
      </div>
  )
}

export default Message;
