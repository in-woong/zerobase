import React, { useContext } from 'react';
import { UserContext } from '../store/user';

export default function BlogPage() {
  const { user, dispatch } = useContext(UserContext);
  console.log('dispatch', dispatch);
  console.log('user', user);
  return (
    <div>
      <h1>BlogPage</h1>
      <button
        onClick={() => dispatch({ type: 'changeJob', text: 'BE-developer' })}
      >
        Change Job
      </button>
      <h2>{user.job}</h2>
    </div>
  );
}
