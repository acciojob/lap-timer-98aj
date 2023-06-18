
import React, { useState } from 'react'
import './../styles/App.css';


let counter = 0
let ctmilisecs = 0
export default function App() {
    const [timers, setTimers] = useState(0);
    const [miliSec, setMiliSec] = useState(0)
    const [arr, setArr] = useState([])

    const startTimer = ()=>{
        counter = setInterval(()=>{

            setTimers(x=> x+1)

        }, 1000) 

        
        ctmilisecs = setInterval(()=>{
            
            setMiliSec(x => x+1);
            
        }, 10)
    }

    const stopTimer = ()=>{
        clearInterval(counter)
        clearInterval(ctmilisecs)
    }

    const resetTimer = ()=>{
        clearInterval(counter)
        clearInterval(ctmilisecs)
        setArr([])
        setTimers(0);
        setMiliSec(0)
    }

    const lapTimer = ()=>{
        setArr([...arr, {timers : timers, miliSec : miliSec}])
    }

    if(miliSec===100){
        setMiliSec(0)        
    }
    if(timers===60){
        setTimers(0)        
    }
  return (
    <div>
        <h1>{timers} : {miliSec}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={lapTimer}>Lap</button>
        <button onClick={resetTimer}>Reset</button>

        <ul>
            {
                arr.map((val)=> <li>{val.timers} :  {val.miliSec}</li>)
            }
        </ul>
    </div>
  )
}
