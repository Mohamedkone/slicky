import './style/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import SideCard from './components/SideCard';
import Burger from './assets/menu.svg'
import Close from './assets/close.svg'
import Support from './assets/support.svg'
import Setting from './assets/setting.svg'
import Chats from './assets/chat.svg'
import Contact from './assets/contact.svg'
import Card from './components/Card'

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
  let decision = true
  
  const [user] = useAuthState(auth);
  const cvo = user ? <Convo auth = {auth} firestore={firestore}/> : <SignIn auth={auth}/>
  const msg = user ? <Message auth = {auth} firestore={firestore}/> : <SignIn auth={auth}/>
  const emit = user? true : false
  const [side, setSide] = useState("hide")

  // function SignOut(props) {
  //   return props.auth.currentUser && (
  //     <button className="sign-out r-btn" onClick={() => props.auth.signOut()}>Sign Out</button>
  //   )
  // }
  return (
    <div className="App">
     {emit?  <nav>
          {decision?<div className="burger" onClick={()=>setSide("show")}><img src={Burger}  alt="" /></div>:<div></div>}
          <h2>convo</h2>
          {decision?<div className="option1"><img src="" alt="" /></div>:<div></div>}
      </nav>:""}
      {emit? <div className={`side-card-${side}`}>
        <div className="s-c-user">
        <h1>Kevin Roger</h1>
        <div className="close" onClick={()=>setSide("hide")}><img src={Close}></img></div>
        </div>
        <div className='s-c-group'>
        <div className="s-c-g-option">
            <img src={Chats} alt="" />
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
            {/* <Card amount = {5} /> */}
        </div>
        <div className="logOut">
        
      <button className="sign-out r-btn" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    </div>:""}
      <BrowserRouter>
      <Routes >
        <Route path='/' element={cvo} />
        <Route path='/message' element={msg} />
      </Routes>
      </BrowserRouter>
        {/* {main} */}
    {/* <Message auth={auth} firestore={firestore}/> */}

    </div>
  );
}





export default App;

