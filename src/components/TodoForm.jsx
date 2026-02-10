import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTodo({ title, completed: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 d-flex">
      <input
        type="text"
        className="form-control me-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
