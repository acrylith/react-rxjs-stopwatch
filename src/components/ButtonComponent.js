import React, { useState } from 'react';

const ButtonComponent = (props) => {
    const [throttle, setThrottle] = useState(Date.now())

    const handleWaitClick = () => {
        if((Date.now() - throttle) <= 300) {
            props.wait()
            setThrottle(Date.now())
        } else {
            setThrottle(Date.now())
        }
    }

    return (
        <div className="controls">
            <button 
                onClick={props.startStop}
                className={props.isWorking ? "stop" : "start"}
            >
                    {props.isWorking ? "Stop" : "Start"}
            </button>
            <button className="wait" onClick={handleWaitClick}>Wait</button>
            <button className="reset" onClick={props.reset}>Reset</button>
        </div>
    );
}

export default ButtonComponent;
