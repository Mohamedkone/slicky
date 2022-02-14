import { useState } from 'react';
import firebase from 'firebase/app';

import React from 'react';

function SignOut(props) {
    return props.auth.currentUser && (
      <button className="sign-out r-btn" onClick={() => props.auth.signOut()}>Sign Out</button>
    )
  }

export default SignOut;