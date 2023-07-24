import { createElement } from "react";
function TimePlayed() {
  let f = 0;
  let i = 0;
  let h = 0;
  let minuto = 4;
  setInterval(time, 1000);
  function time() {
    const sec = document.getElementById('sec');
    sec.innerText = i ;
    ++i;
    minuto.valueOf(i)
    if (i >= 60) {
      i = 0;      
      
      const element = document.getElementById('min');
      ++f;
      element.innerText = f + ':';      
      if( f >= 60){
        h++;
        f = 0;
        const hora = document.getElementById('hor');
        hora.innerText = h + ":";
      }
    }
  }

  return (
    <div className="cont-time">
      <div className="titular">
        <p >Tiempo </p>
      </div>
      <div className="cronometer">
        <p id="hor">0:</p>
        <p id="min">0:</p>
        <p id="sec">0</p>
      </div>
    </div>
  );
}
export default TimePlayed;
