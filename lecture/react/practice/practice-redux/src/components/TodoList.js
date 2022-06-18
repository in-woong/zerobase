import React, { useContext } from 'react';
import { TodoContext } from '../store/todos';
import Todo from './Todo';
export default function TodoList() {
  const { todos } = useContext(TodoContext);
  console.log('todos', todos);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
  // return <ul>{todos && todos.map((todo) => <Todo todo={todo} />)}</ul>;
}
