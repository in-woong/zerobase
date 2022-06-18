import React, { useContext } from 'react';
import { TodoContext } from '../store/todos';
export default function FilterLink() {
  const { showAllTodo, showFinishedTodo, showWillTodo } =
    useContext(TodoContext);
  return (
    <>
      <button onClick={showAllTodo}>All</button>
      <button onClick={showFinishedTodo}>Todo</button>
      <button onClick={showWillTodo}>Finished</button>
    </>
  );
}
