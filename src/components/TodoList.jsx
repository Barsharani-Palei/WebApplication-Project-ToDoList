import React from 'react';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
    return (
         <ul className="list-group">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <div>
                        <input
                            type="checkbox"
                            className="form-check-input me-2"
                            checked={todo.completed}
                            onChange={() => updateTodo(todo)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.title}
                        </span>
                    </div>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
