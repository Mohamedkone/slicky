import React, { useState } from 'react';
import Nav from '../components/Nav';
import Register_one from '../components/Register_one'
import Dots from '../assets/dots.svg'
import Register_two from '../components/Register_two';
import Register_three from '../components/Register_three';
import ProgressBar from 'react-bootstrap/ProgressBar'
import ValidPop from '../components/ValidPop';
import SignOut from '../components/SignOut';

function Registration(props) {
  let ok = props.auth
  const [toDisplay, setToDisplay] = useState()
  let [page, setPage] = useState(1)
  let [progress, setProgress] = useState(40)
  let result = "denied"
  let showvpop
  const nextPage = () =>{
    setPage(page=page+1)
    setProgress(progress+20)
  }
  const previousPage = () =>{
    setPage(page=page-1)
    setProgress(progress-20)
  }
  

  return (
      <div className='register1'>
          <Nav title={"Registering"} option={Dots} decision={false}/>
          {/* <SignOut auth={ok}/> */}
          <ProgressBar animated striped now={progress} label={`${progress}% Done`} />
          {page==1?<Register_one />:""}
          {page==2?<Register_two />:""}
          {page==3?<Register_three />:""}
          {/* <ValidPop result={result} /> */}
          <div className='r-form-nav'>
          {page>1?<div className='r-btn r-left-btn' onClick={()=>previousPage()}>&#8678; Previous</div>:""}
          {page<3?<div className='r-btn r-right-btn'  onClick={()=>{nextPage();}}>Next &#8680;</div>:""}
          </div>
      </div>
  )
}

export default Registration;
