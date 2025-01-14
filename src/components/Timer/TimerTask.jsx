import React, {useEffect} from 'react';


const TimerTask = ({startTimer, stopTimer, seconds, isRunning, task, setSeconds}) => {


    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);


    useEffect(() => {
        if (task.completed && isRunning) {
            stopTimer();
        }
    }, [task.completed, isRunning]);


    const formattedTimer = new Date(seconds * 1000).toISOString().substr(11, 8);
    return (
        <>
            <button className={`icon-play ${isRunning ? 'active' : ''}`} onClick={startTimer}></button>
            <span className="timer">{formattedTimer}</span>
            <button className={`icon-pause ${!isRunning ? 'active' : ''}`} onClick={stopTimer}></button>
        </>

    )
}


export default TimerTask;












































































