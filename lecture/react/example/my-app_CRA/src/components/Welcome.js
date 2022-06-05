import React from 'react';
import cat from '../img/Screen Shot 2022-05-31 at 9.36.13 PM.png';

export default function Welcome({ firstName, lastName, withImg }) {
  return (
    <>
      {withImg && <img src={cat} alt='welcomeCat' height='200px' />}
      <div>Hello!</div>
      <div>
        <span>{firstName}</span>
        {lastName}
      </div>
    </>
  );
}
