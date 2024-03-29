import { useState } from "react";
import firebase, { auth } from "firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Asend from '../assets/send.svg'
import { Link } from "react-router-dom";
import Video from "../assets/video-camera.svg"

function Chat(props) {
      

    const messagesRef = props.firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState("")
    const [lUid, setUid] = useState(props.auth.currentUser.uid)
  
    const sendMessage = async(e) =>{
      e.preventDefault()
      await messagesRef.add({
        text: formValue,
        uid: lUid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }
    return (<>
      <div className="display-msg">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} try={props}/>)}
  
      </div>
      <div className="chat-send">
        <a href="https://video-slickys.web.app/">
        <div className="videoCall" ><img src={Video} alt="" /></div>
        </a>
      <form onSubmit={sendMessage}>
        <textarea className="msg-i" value={formValue} rows='1' onChange={(e)=> setFormValue(e.target.value)} />
        <button disabled={ formValue === ""?"disable":""}><img src={Asend} alt="" /></button>
      </form>
      </div>
  
    </>)
  
  
  function ChatMessage(props) {
    const { text, uid } = props.message;
    const messageClass = uid === props.try.auth.currentUser.uid ? 'received' : 'sent'
    return (<>
        <div className={`message ${messageClass}`}>
          
        {text}
        </div>
    </>)
  }
  
  }
  
  export default Chat;
  
