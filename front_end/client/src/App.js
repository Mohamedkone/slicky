import './style/App.css';
import { useState } from 'react';
import SignIn from './pages/SignIn'
import Chat from './components/Chat'
import SignOut from './components/SignOut'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Registration from './pages/Registration';
import Convo from './pages/Convo';
import Message from './pages/Message';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from './pages/Video';

firebase.initializeApp({
  apiKey: "AIzaSyCAbFmgXlgfntlxF-oQN4R1v6Jw6pctPwQ",
  authDomain: "slicky-a1f38.firebaseapp.com",
  projectId: "slicky-a1f38",
  storageBucket: "slicky-a1f38.appspot.com",
  messagingSenderId: "530037546067",
  appId: "1:530037546067:web:3ff0be8603dbcf23557aa6"
})

const auth = firebase.auth();
const firestore = firebase.firestore();




function App() {
  
  const [user] = useAuthState(auth);
  // const main = user ? <Video auth = {auth} firestore={firestore}/> : <SignIn auth={auth}/>
  return (
    <div className="App">

      <Video auth = {auth} firestore={firestore}/>
        {/* {main} */}
 

    </div>
  );
}





export default App;

