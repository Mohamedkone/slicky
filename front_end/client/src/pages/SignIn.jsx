import { useState } from 'react';
import '../style/signIn.css'
import firebase from 'firebase/app';

  
function SignIn(props) {
  
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      props.auth.signInWithPopup(provider);
    }
  
    return (
      <section className='sign-in-page'>
          <h1>SLICK</h1>
        <button className="sign-in-btn" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/color/48/000000/google-logo.png"/> Sign in with Google
            </button>
      
      </section>
    )
  
  }

  export default SignIn;
