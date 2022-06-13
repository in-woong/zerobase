import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default function MainPage() {
  const Categories = styled.h2`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
  `;
  return (
    <>
      <h1>MainPage</h1>
      <Categories>
        <Link to='./Blog'>
          <h2>Blog</h2>
        </Link>
        <span> | </span>
        <Link to='./Tech'>
          <h2>Tech</h2>
        </Link>
      </Categories>
    </>
  );
}
