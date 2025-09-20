import React, { useState, useEffect } from "react";
import "./App.css";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // change whole page background
    if (count === 5) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }

    // cleanup (reset background when component unmounts)
    return () => {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    };
  }, [count]);

  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Count;
