import React from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';
import Burger from '../assets/menu.svg'
import Option from '../assets/edit-text.svg'
import SignOut from '../components/SignOut';
import SideCard from '../components/SideCard';

function Convo(props) {
  return (
      <div>
          <Card amount={10} auth = {props.auth} firestore={props.firestore} />
          
      </div>
  )
}

export default Convo;
