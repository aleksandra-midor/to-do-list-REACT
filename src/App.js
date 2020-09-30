import React from "react";
import "./App.css";
// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <hi>Alex's to do list</hi>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
