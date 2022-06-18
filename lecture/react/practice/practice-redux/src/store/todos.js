import React, { createContext, useReducer, useState } from 'react';

const initialTodos = [
  {
    id: Date.now(),
    title: 'Study Javascript',
    finished: false,
  },
];

export const TodoContext = createContext();

export default function TodoStore(props) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const addedTodos = [
      ...todos,
      { id: Date.now(), title: text, finished: false },
    ];
    setTodos(addedTodos);
    console.log('add', todos);
  };
  const toggleTodo = (id) => {
    let index;
    const selectedTodo = todos.filter((todo, i) => {
      if (todo.id == id) {
        index = i;
        return true;
      }
    })[0];

    selectedTodo.finished = !selectedTodo.finished;

    const newTodos = [
      ...todos.slice(0, index),
      selectedTodo,
      ...todos.slice(index + 1),
    ];
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    console.log('delete', todos);
    setTodos(deletedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
}
