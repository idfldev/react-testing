import "../src/index.css";
import React from "react";

export default function App() {
  const userName = "Justin";
  const myStyle = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
  };
  // Inline styles can also be used directly in JSX
  const styleEvent = {
    color: "green",
    fontSize: "18px",
    fontWeight: "normal",
  }
  const handleChange = () => {
    styleEvent.color = styleEvent.color === "green" ? "red" : "green";
    // Force a re-render by updating state or using a workaround
    // This is just for demonstration; in a real app, use state management
    document.querySelector("h1").style.color = styleEvent.color;
  };

  const names = ["Alice", "Bob", "Charlie"];
  const headerText = names.map((name, index) => (
    <span key={index} className="text-blue-500">
      {name}
      {index < names.length - 1 ? ", " : ""}
    </span>
  ));

  return (
    <div className="container mx-auto p-4">
      <h1 className={`text-2xl font-bold ${styleEvent}`}>Welcome to My App</h1>
      <p className="text-gray-700" style={{ backgroundColor: "orange" }}>
        
        <br />
        This is a simple React application.
      </p>
      <span style={myStyle}>hello {userName}</span> <br />
      <ul>
        {names.map((name, index) => {
          return (
            <li key={index}>👉 {name}</li>
          )
        })}
      </ul>

      <a href="#">{headerText}</a> <br />

      <button className="bg-blue-300 py-2 px-4 rounded shadow" onClick={handleChange}>Change Color</button>
    </div>
  );
}
