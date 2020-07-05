import React, { useState } from 'react';
import './App.css';
import TacoImg from './img/taco.png';

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <div className="container">
      <div className="tacoCounter">
        <h2>
          you've touched the taco {counter} {counter === 1 ? 'time' : 'times'}{' '}
          {counter >= 10 && '🔥'}
        </h2>
        <img
          className="tacoImg"
          src={TacoImg}
          alt="it's a taco"
          onClick={handleClick}
        />
        <span className="beastText">{counter >= 25 && <p>you beast</p>}</span>
      </div>
    </div>
  );
}

export default App;
