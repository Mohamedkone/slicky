import React from 'react';
import '../style/App.css'
import accept from '../assets/accept.svg'
import denied from '../assets/denied.svg'
function ValidPop(props) {
    let result = props.result
    let image = result
  return (
      <div className={`r-valid-pop r-v-p-${result}`}>
          <img src={result=="accept"?accept:denied} alt="" />
      </div>
  )
}

export default ValidPop;
