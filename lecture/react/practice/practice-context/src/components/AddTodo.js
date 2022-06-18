import React, { useContext, useState } from 'react';
import { TodoContext } from '../store/todos';
export default function AddTodo() {
  const { addTodo } = useContext(TodoContext);

  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
    <form action='submit' onSubmit={handleSubmit}>
      <input type='text' value={todo} onChange={handleChange} />
      <button>submit</button>
    </form>
  );
}
