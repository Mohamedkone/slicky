import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCAbFmgXlgfntlxF-oQN4R1v6Jw6pctPwQ",
  authDomain: "slicky-a1f38.firebaseapp.com",
  projectId: "slicky-a1f38",
  storageBucket: "slicky-a1f38.appspot.com",
  messagingSenderId: "530037546067",
  appId: "1:530037546067:web:3ff0be8603dbcf23557aa6"
})
const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
