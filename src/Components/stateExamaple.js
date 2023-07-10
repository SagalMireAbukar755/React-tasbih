import React from "react";
import { useState } from "react";
import "./state.css";

function StateExamaple() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  const [dColor, setDColor] = useState("");

  const handleIncrement = () => {
    setCount(count + 1);
    if (count === 9) {
      setColor("blue");
    } else {
      setColor("");
    }
  };

  const handleDecrement = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
    if (count === 11) {
      setDColor("blue");
    } else {
      setDColor("");
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
    
    <div className="state">
      <h1>{count}</h1>
      <div className="btns">
        <button
          style={{ backgroundColor: `${color}` }}
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          style={{ backgroundColor: `${dColor}` }}
          onClick={handleDecrement}> Dicrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
   
    </>
  );
}

export default StateExamaple;
