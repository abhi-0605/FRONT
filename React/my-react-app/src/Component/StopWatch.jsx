import React, { useEffect, useRef, useState } from 'react'


function StopWatch() {

    const [isRunning, setisRunning] = useState(false);
    const [elapsedTime, setelapsedTime] = useState(0);
    
    const intervalRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(()=>{
        if(isRunning){
            intervalRef.current = setInterval(() => {
                setelapsedTime(Date.now()-startTimeRef.current)
            }, 10);
        }

        return()=>{
            clearInterval(intervalRef.current)
        }
    },[isRunning])

    function start(){
        setisRunning(true);
        startTimeRef.current = Date.now()- elapsedTime;
    }

    function stop(){
        setisRunning(false)

    }

    function reset(){
        setelapsedTime(0)
        setisRunning(false)
    }

    function formatTime(){

        let hours=Math.floor(elapsedTime/(1000*60*60))
        let minutes=Math.floor(elapsedTime/(1000*60)%60)
        let seconds=Math.floor(elapsedTime/(1000)%60)
        let milliseconds=Math.floor((elapsedTime%1000)/60)

        hours=String(hours).padStart(2,"0")
        minutes=String(minutes).padStart(2,"0")
        seconds=String(seconds).padStart(2,"0")
        milliseconds=String(milliseconds).padStart(2,"0")

        return `${minutes}:${seconds}:${milliseconds}`
    }

  return (
    <div className='stop-watch'>
      <div className='display'>
        {formatTime()}
      </div>
      <div className='controls'>
        <button className='start-btn' onClick={start}>Start</button>
        <button className='stop-btn' onClick={stop}>Stop</button>
        <button className='reset-btn' onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch
