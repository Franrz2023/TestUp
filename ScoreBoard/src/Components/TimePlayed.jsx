import { createElement } from "react";

function TimePlayed() {
  let f = 0;
  let i = 0;
  let minuto = 4;
  setInterval(time, 1000);

  function time() {
    const element = document.getElementById('time');    
    element.innerText =  i;
    ++i;
    minuto.valueOf(i)
    if (i >= 5) {
      i = 0;
      const hora = document.getElementById('hora');
      ++f;
      hora.innerText = " H "+f+':' ;
    }

  }

  return (

      <div className="cont-time">
        <div className="titular">
          <p >Tiempo </p>
        </div>
        <div>
          <p id="hora"></p>
          <p id="time"></p>
        </div>
      </div>


  );
}

export default TimePlayed;
