import React from "react";
// Import components
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  console.log(todos)
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {todos.map(todo => (
        <Todo text={todo.text} />
      ))}
    </div>
  );
};

export default TodoList;
