import React, { useState } from 'react';

function Card() {
    let status =[1,3,1,1,0,2,2,3,3,1]
    let friend=['Allen Iverson', 'M.Jordan','Elon Musk', 'Lionel Messi',
                'Gaming Group', 'Michelle Obama','Rihanna','Cristiano Ronaldo',
                'Mark Zuckerberg', 'Peter Parker']
    let time = ['32sec','5min','16min','22min','8h','8h','1day','1day','1day','2day',]
    let card = []
    let i = 0
    for(i = 0; i<10; i++){
        card.push(
            <div key={i} className="c-container">
            <div className={`c-c-avatar status${status[i]}`}>
                <img src="" alt="" />
            </div>
            <div className="c-c-content">
                <h3 className="c-2c-name">{friend[i]}</h3>
                <div className="c-2c-message">
                    <p>
                      <span>Sent: </span>
                      You Owe me 20$ bro!!!
                    </p>
                </div>
            </div>
            <div className='c-2c-time'>
                <span>{time[i]}</span>
            </div>
        </div>
        )
    }
  return (
      <div className="c">
          {card}
      </div>
  )
}

export default Card;
