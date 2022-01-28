import React from 'react';

const ClockScreen = (props) => {
  return (
    <div className="clock__screen">
      <div className="clock__section hours">
        <div className="clock__measure">
          {Math.floor((props.time / 3600) % 24) < 10 ? `0${Math.floor((props.time / 3600) % 24)}` : Math.floor((props.time / 3600) % 24)}
        </div>
        <p className="clock__label">hours</p>
      </div>

      <div className="clock__section minutes">
        <div className="clock__measure">
          {Math.floor(props.time / 60 ) < 10 ? `0${Math.floor(props.time / 60)}` : Math.floor(props.time / 60 )}
        </div>
        <p className="clock__label">minutes</p>
      </div>

      <div className="clock__section seconds">
        <div className="clock__measure">
          {Math.floor(props.time % 60) < 10 ? `0${Math.floor(props.time % 60)}` : Math.floor(props.time % 60)}
        </div>
        <p className="clock__label">seconds</p>
      </div>

    </div>
  );
}

export default ClockScreen;