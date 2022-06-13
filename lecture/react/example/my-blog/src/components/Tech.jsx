import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactComponent from './React';
import Javascript from './Javascript';

export default function Tech() {
  const Categories = styled.h2`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
  `;
  return (
    <>
      <h1>Tech</h1>
      <Categories>
        <Link to='./react'>React</Link>
        <Link to='./javascript'>Javascript</Link>
      </Categories>
      <Routes>
        <Route path='react/*' element={<ReactComponent />} />
        <Route path='javascript' element={<Javascript />} />
      </Routes>
    </>
  );
}
