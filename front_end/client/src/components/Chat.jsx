import { useState } from "react";
import firebase from "firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';

function Chat(props) {
      

    const messagesRef = props.firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState("")
  
    const sendMessage = async(e) =>{
      e.preventDefault()
      console.log(e)
      console.log(props.auth)
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }
    return 0
  

  
  }
  
  export default Chat;
  
