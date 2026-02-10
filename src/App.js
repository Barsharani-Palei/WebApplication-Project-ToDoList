import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:8080/api/todos");
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (todo) => {
    await axios.post("http://localhost:8080/api/todos", todo);
    fetchTodos();
  };

  const updateTodo = async (todo) => {
    await axios.put(`http://localhost:8080/api/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8080/api/todos/${id}`);
    fetchTodos();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📝 To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
