import React from 'react';
import logo from '../../src/logo.svg';
export default function Header({ name }) {
  //   const message = 'Message';
  //   const name = 'woong';
  // const getGreetingMessage = (name) => {
  //   if (name === 'inwoong') return `Hello, ${name} run REact`;
  //   return 'welcome';
  // };
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        {name === 'inwoong' ? `Hello ${name} run React` : 'welcome'}
      </a>
    </header>
  );
}
