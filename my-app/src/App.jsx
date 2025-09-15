import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //  States for Calculator
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [result, setResult] = useState(null)

  //  Calculator functions
  const handleAdd = () => setResult(Number(num1) + Number(num2))
  const handleSub = () => setResult(Number(num1) - Number(num2))
  const handleMul = () => setResult(Number(num1) * Number(num2))
  const handleDiv = () => setResult(Number(num1) / Number(num2))
  const handleMod = () => setResult(Number(num1) % Number(num2))

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* ✅ Calculator */}
      <div style={{ marginTop: "30px", padding: "20px", border: "1px solid gray", borderRadius: "10px" }}>
        <h2>Simple Calculator</h2>
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
          style={{ marginLeft: "10px" }}
        />
        <div style={{ marginTop: "15px" }}>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSub}>Subtract</button>
          <button onClick={handleMul}>Multiply</button>
          <button onClick={handleDiv}>Divide</button>
          <button onClick={handleMod}>Modulo</button>
        </div>
        <h3 style={{ marginTop: "15px" }}>
          Result: {result !== null ? result : "—"}
        </h3>
      </div>
    </>
  )
}

export default App
