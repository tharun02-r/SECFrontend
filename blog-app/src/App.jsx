import { useState, useEffect } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [greet, setGreet] = useState("");

  // Call /hello endpoint when component loads
  useEffect(() => {
    fetch("http://localhost:8080/hello")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("Error fetching /hello:", err));
  }, []);

  // Call /greet endpoint when button is clicked
  const handleGreet = async () => {
    try {
      const response = await fetch("http://localhost:8080/greet");
      const data = await response.text();
      setGreet(data);
    } catch (err) {
      console.error("Error fetching /greet:", err);
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "red" }}>
      <h1>Spring Boot + React Demo</h1>
      <p>Message from backend: {message}</p>
      <button onClick={handleGreet}>Greet Me</button>
      <p>{greet}</p>
    </div>
  );
}
