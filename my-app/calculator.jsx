import { useState } from "react";
import "./App.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // Functions for each operation
  const add = () => setResult(Number(num1) + Number(num2));
  const subtract = () => setResult(Number(num1) - Number(num2));
  const multiply = () => setResult(Number(num1) * Number(num2));
  const divide = () => {
    if (Number(num2) === 0) {
      setResult("Error (÷ by 0)");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };
  const clear = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <div className="App">
      <h2>Simple Calculator</h2>
      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>

      <div className="buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>×</button>
        <button onClick={divide}>÷</button>
        <button onClick={clear}>Clear</button>
      </div>

      <h3>Result: {result !== null ? result : "___"}</h3>
    </div>
  );
}

export default Calculator;
