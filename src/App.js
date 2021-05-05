import "./styles.css";
import TodoForm from "./TodoForm";
import React from "react";
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Learning about React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false }
  ]);
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="heading">To Do List</div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      <hr />
      <div className="center">
        Made by &copy; Copyright <b>Anmol Reshi</b>
      </div>
    </div>
  );
}

export default App;
