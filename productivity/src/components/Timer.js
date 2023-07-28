import React from 'react'
import {
    useState, 
    useEffect
} from 'react';


function Timer() {

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);


  // updates the count on the respective part of the timer
  const updateTimer = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
        setTimerRunning(false);
        return;
    } 
    if (seconds > 0)    {
        setSeconds (seconds - 1);
    }
    else    {
        if (minutes > 0)    {
            setMinutes(minutes -1);
            setSeconds(59);
        } else {
            if (hours > 0)  {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
            }
        }
    }
  };
  
  useEffect(() =>   {
    let interval;

    if (timerRunning)   {
        interval = setInterval(updateTimer, 1000);
    } else {
        clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerRunning, updateTimer]);

  // to start the timer 
  const handleStart = () => {
    setTimerRunning(true);
  }

  // to stop the timer
  const handleStop = () =>  {
    setTimerRunning(false);
  };

  // handles the reset of the timer
  const handleReset = () => {
    setTimerRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }


  return (
        <div className="card w-full bg-base-300 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-left">Pomodoro Timer</h2>

                    <div className="divider" />

                    <div className="flex justify-center">
                        <div className>
                            <h2 className="text-center font-bold pb-2">Hours</h2>
                            <input
                              className="input input-bordered w-full font-bold text-lg"
                              type="number"
                              placeholder="0"
                              value={hours}
                              onChange={(e) => setHours(parseInt(e.target.value))}
                            />
                        </div>

                        <div className="divider-horizontal" />

                        <div>
                            <h2 className="text-center font-bold pb-2">Minutes</h2>
                            <input
                              className="input input-bordered w-fulln font-bold text-lg"
                              type="number"
                              placeholder="0"
                              value={minutes}
                              onChange={(e) => setMinutes(parseInt(e.target.value))}
                            />
                        </div>

                        <div className="divider-horizontal" />

                        <div>
                            <h2 className="text-center font-bold pb-2">Seconds</h2>
                            <input
                              className="input input-bordered w-full font-bold text-lg"
                              type="number"
                              placeholder="0"
                              value={seconds}
                              onChange={(e) => setSeconds(parseInt(e.target.value))}
                            />
                        </div>
                    </div>

                    <div className="divider" />

                    <div className="card-actions justify-center">
                        <button className="btn btn-success w-48 font-bold" onClick={handleStart}>Start</button>
                        <button className="btn btn-info w-48 font-bold" onClick={handleStop}>Stop</button>
                        <button className="btn btn-primary w-48 font-bold" onClick={handleReset}>Reset</button>

                    </div>
                </div>
        </div>
  )
}

export default Timer