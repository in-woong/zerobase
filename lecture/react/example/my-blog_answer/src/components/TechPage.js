import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function TechPage() {
  return (
    <div>
      <h2>TechPage</h2>
      <Link to='./react'>React</Link> |{' '}
      <Link to='./javascript'>Javascript</Link>
      <Outlet />
    </div>
  );
}
