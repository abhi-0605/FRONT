    import React from 'react'
    import { useEffect } from 'react'
    import { useState } from 'react'

    function DigitalClock() {
        const [time, settime] = useState(new Date());

        useEffect(()=>{
            const intervalId=setInterval(() => {
                settime(new Date())
            }, 1000);

            return()=>{
                clearInterval(intervalId)
            }
        },[])

        function formatTime(){
            let hour= time.getHours();
            let minutes= time.getMinutes();
            let seconds= time.getSeconds();

            const meridiem= hour>=12?"PM":"AM"
            hour=hour%12 || 12

            return `${padZero(hour)}:${padZero(minutes)}:${padZero(seconds)}:${meridiem}`
        }

        function padZero(number){
            return number<10? "0"+number : number
        }
        return (
            <div className='clock-container'>
                <div className='clock'>
                    <span>{formatTime()}</span>
                </div>
            </div>
        )
    }

    export default DigitalClock
