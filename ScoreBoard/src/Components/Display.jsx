import React, { useState } from 'react'


let sum = 0;

function Display() {   
  
    // // function Winer(){
    // //   let song = document.getElementById('victoria')
    // //   song.play();      
    // // }
   
    
    let [count, setCount] = useState(0)
 


    if (count < 0){
        count = 0;  
    }
    if(count > 5){
        count = 0;                            
        sum++;         
        Winer();
    }    
  return (
    <div className='display'>
      <h1 >Equipo </h1>
      <button id="btnPos" onClick={() => setCount(count + 1)}>+</button>
      <p id='Numero'>{count}</p>
      <button id='btnNeg' onClick={() => setCount(count - 1)}>-</button>
      <p id='set' >Set Ganados : <strong>{sum}</strong></p>
      <img  alt="" />
      {/* <audio id='victoria'   >
        <source src="public\Sounds\Victory.mp3" type="audio/mpeg" />
      </audio> */}
    </div>
  )
}

export default Display