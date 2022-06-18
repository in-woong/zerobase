import React, { useContext } from 'react';
import { TodoContext } from '../store/todos';
export default function Todo({ todo }) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <li>
      {todo.finished ? (
        <span>
          <s>{todo.title}</s>
        </span>
      ) : (
        <span>{todo.title}</span>
      )}
      <button onClick={() => toggleTodo(todo.id)}>finished</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
