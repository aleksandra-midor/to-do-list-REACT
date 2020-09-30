import React, { useState } from "react";
import "./App.css";
// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
  <hi>Alex's to do list</hi>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
