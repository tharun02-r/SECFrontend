import { useState } from "react"
import "./App.css"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task.trim()])
      setTask("")
    }
  }

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask()
  }

  return (
    <div className="app-container">
      <h1 className="title">To-Do List</h1>

      <div className="input-row">
        <input
          className="todo-input"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a task"
          aria-label="Task input"
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="tasks-list">
        {tasks.map((t, index) => (
          <li className="task-item" key={index}>
            <span className="task-text">{t}</span>
            <button
              className="delete-button"
              onClick={() => removeTask(index)}
              aria-label={`Delete task ${t}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
