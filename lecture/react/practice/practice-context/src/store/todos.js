import React, { createContext, useReducer, useState } from 'react';

const ShowAll = 'All';
const ShowFinished = 'Finished';
const showWill = 'Will';

export const TodoContext = createContext();

export default function TodoStore(props) {
  const [todos, setTodos] = useState([]);
  const [displayTodos, setDisplayTodos] = useState(todos);
  const [type, setType] = useState(ShowAll);

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      { id: Date.now(), title: text, finished: false },
    ];
    console.log(newTodos, text);
    setTodos((todos) => [
      ...todos,
      { id: Date.now(), title: text, finished: false },
    ]);

    switch (type) {
      case ShowAll:
        setDisplayTodos(() => todos);
        break;
      case ShowFinished:
        setDisplayTodos(() => todos.filter((todo) => todo.finished == true));
        break;
      case showWill:
        setDisplayTodos(() => todos.filter((todo) => todo.finished == false));
        break;
    }
    console.log(todos, text);
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

    switch (type) {
      case ShowAll:
        setDisplayTodos(todos);
        break;
      case ShowFinished:
        const finisehdTodos = todos.filter((todo) => todo.finished == true);
        setDisplayTodos(finisehdTodos);
        break;
      case showWill:
        const willTodos = todos.filter((todo) => todo.finished == false);
        setDisplayTodos(willTodos);
        break;
    }
  };

  const deleteTodo = (id) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(deletedTodos);
    switch (type) {
      case ShowAll:
        setDisplayTodos(todos);
        break;
      case ShowFinished:
        setDisplayTodos(todos.filter((todo) => todo.finished == true));
        break;
      case showWill:
        setDisplayTodos(todos.filter((todo) => todo.finished == false));
        break;
    }
  };

  const showAllTodo = () => {
    setType(ShowAll);
    setDisplayTodos(() => todos);
  };

  const showWillTodo = () => {
    setType(showWill);
    setDisplayTodos(() => todos.filter((todo) => todo.finished == true));
  };

  const showFinishedTodo = () => {
    setType(ShowFinished);
    setDisplayTodos(() => todos.filter((todo) => todo.finished == false));
  };
  return (
    <TodoContext.Provider
      value={{
        displayTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        showWillTodo,
        showFinishedTodo,
        showAllTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
