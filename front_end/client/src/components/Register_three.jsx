import React, {useState} from 'react';
function Register_three() {
    let [set,setSet] = useState("disabled")
const check=(e)=>{
e.target.checked==true? setSet("") : setSet("disabled")
}

  return (
      <div className='register register3'>
          <div className="r-header">
              <h1>Last step</h1>
              <h3>Terms Of Uses</h3>
          </div>
          <div className="terms-container">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem repellat molestiae neque veritatis? Culpa hic
                dignissimos sequi, maiores deserunt, commodi animi ullam vero,
                nesciunt reprehenderit aliquid. Assumenda tenetur illum sequi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem repellat molestiae neque veritatis? Culpa hic
                dignissimos sequi, maiores deserunt, commodi animi ullam vero,
                nesciunt reprehenderit aliquid. Assumenda tenetur illum sequi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem repellat molestiae neque veritatis? Culpa hic
                dignissimos sequi, maiores deserunt, commodi animi ullam vero,
                nesciunt reprehenderit aliquid. Assumenda tenetur illum sequi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem repellat molestiae neque veritatis? Culpa hic
                dignissimos sequi, maiores deserunt, commodi animi ullam vero,
                nesciunt reprehenderit aliquid. Assumenda tenetur illum sequi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem repellat molestiae neque veritatis? Culpa hic
                dignissimos sequi, maiores deserunt, commodi animi ullam vero,
                nesciunt reprehenderit aliquid. Assumenda tenetur illum sequi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem repellat molestiae neque veritatis? Culpa hic
                dignissimos sequi, maiores deserunt, commodi animi ullam vero,
                nesciunt reprehenderit aliquid. Assumenda tenetur illum sequi.
            </p>
          </div>
          <div className="r-check-terms">
          <input type="checkbox" name="" id="terms" onChange={(e)=>check(e)}/>
          <label htmlFor="checkbox" >Yes, I accept the terms and conditions to use this
          this website or app</label>
          </div>
          <button className='r-btn r-finish' id={`btn-${set}`} disabled={set}>Done</button>
      </div>
  )
}

export default Register_three