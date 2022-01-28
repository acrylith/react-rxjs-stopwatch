import './styles/style.css';
import React, { useState, useEffect } from 'react';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import ClockScreen from './components/ClockScreen';
import ButtonComponent from './components/ButtonComponent';


function App() {

  const [counter, setCounter] = useState(0);
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {

    const unsubscribe = new Subject();
    interval(1000)
        .pipe(takeUntil(unsubscribe))
        .subscribe(() => {
          if (isWorking) {
            setCounter(val => val + 1);
          }
        });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [isWorking]);

  const startStop = () => {
    if(isWorking) {
      setIsWorking(prevState => !prevState);
      setCounter(0)
    } else {
      setIsWorking(prevState => !prevState);
    }
  }

  const wait = () => {
    setIsWorking(false);
  }


  const reset = () => {
    setCounter(0);
  }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="container">
        <ClockScreen time={counter} />
        <ButtonComponent
            startStop={startStop}
            reset={reset}
            wait={wait}
            isWorking={isWorking}
        />
      </div>
    </div>
  );
}

export default App;
