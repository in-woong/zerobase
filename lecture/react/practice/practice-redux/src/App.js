import { useState } from 'react';
import FilterLink from './components/FilterLink';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoStore from './store/todos';

function App() {
  return (
    <>
      <div className='App'>
        <TodoStore>
          <AddTodo />
          <FilterLink />
          <TodoList />
        </TodoStore>
      </div>
    </>
  );
}

export default App;
