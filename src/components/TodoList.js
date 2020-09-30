import React from "react";
// Import components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  // Events

  return (
    <div className="todo-container">
      <ul className="todo-list">
      {todos.map(todo => (
        <Todo       
        todos={todos} 
        setTodos={setTodos} 
        todo={todo}
        key={todo.id} 
        text={todo.text} 
        />
      ))}
      </ul>
    </div>
  );
};

export default TodoList;
