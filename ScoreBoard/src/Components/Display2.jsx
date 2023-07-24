import React from 'react'

let cont = 0;

let sets = 0;


function Winners() {
    let song = document.getElementById('victoria')
    song.play();
}


function Botonsum() {
    let btnsum = document.getElementById('Numero');
    cont++;
    btnsum.innerText = cont;    
    if (cont > 3) {
        let btnsum = document.getElementById('Numero');
        cont = 0;
        btnsum.innerText = cont;
        //Controla e asigna suma sets
        let setganados = document.getElementById('textset');
        sets++;
        setganados.innerText ='Set Ganados :' + sets;  
    }if(sets > 2){
        Winners();
        console.log('SONANDO CANSIOn')
    }
}

function Botonres() {
    let btnsum = document.getElementById('Numero');
    let rest = cont--;
    console.log(cont)
    btnsum.innerText = cont;
    if (cont <= 0) {
        cont = 0;
        btnsum.innerText = 0;
    }
}




function Display2() {
    return (
        <div className='display1'>
            <h1 >DISPLAY2 </h1>
            <button id="btnPos1" onClick={Botonsum}>+</button>
            <p id='Numero'></p>
            <button id='btnNeg1' onClick={Botonres}>-</button>
            <p id='textset' >Set Ganados : </p>
            <img alt="" />
            <audio id='victoria'   >
                <source src="public\Sounds\Victory.mp3" type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Display2