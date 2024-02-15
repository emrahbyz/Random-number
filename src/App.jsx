import React from "react";
import "../src/App.css";
import { useState } from "react";

const App = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [randomNumber, setRandomNumber] = useState(5);

  const randomNum = () => {
    setRandomNumber(
      Math.floor(Math.random() * (maxValue - minValue - 1) + minValue)
    );
  };
  return (
    <div className="App">
      <div className="randomNum">
        <p>
          Random Number <span> {randomNumber} </span>
        </p>
      </div>
      <div className="numDiv">
        <div className="minNum">
          <label>Min: </label>
          <input
            type="number"
            value={minValue}
            onChange={(e) => setMinValue(parseFloat(e.target.value))}
          />
        </div>
        <div className="maxNum">
          <label>Max:</label>
          <input
            type="number"
            value={maxValue}
            onChange={(e) => setMaxValue(parseFloat(e.target.value))}
          />
        </div>

        <button onClick={randomNum}>Get Random Number</button>
      </div>
    </div>
  );
};

export default App;
