import React, { useState } from 'react'

let sum = 0;
function Display() {   
    let [count, setCount] = useState(0)
    if (count < 0){
        count = 0;  
    }
    if(count > 5){
        count = 0;
        let set = document.getElementById('set');        
        sum++;
    }
    
  return (

    <div className='display'>
      <h1 >Equipo </h1>
      <button id="btnPos" onClick={() => setCount(count + 1)}>+</button>
      <p id='Numero'>{count}</p>
      <button id='btnNeg' onClick={() => setCount(count - 1)}>-</button>
      <p id='set' >Set Ganados : <strong>{sum}</strong></p>
    </div>


  )
}

export default Display