import { useState } from "react";
import firebase, { auth } from "firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';

function Chat(props) {
      

    const messagesRef = props.firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState("")
    const [lUid, setUid] = useState(props.auth.currentUser.uid)
    console.log(lUid)
  
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
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e)=> setFormValue(e.target.value)} />
        <button>CLick</button>
      </form>
  
    </>)
  
  
  function ChatMessage(props) {
    const { text, uid } = props.message;
    console.log(uid)
    const messageClass = uid === props.try.auth.currentUser.uid ? 'received' : 'sent'
  
    return (<>
        <div className={`message ${messageClass}`}>
          
        <p>{text}</p>
        </div>
    </>)
  }
  
  }
  
  export default Chat;
  
