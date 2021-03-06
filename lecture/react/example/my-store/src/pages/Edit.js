import React, { useState, lazy, Suspense } from 'react';
import { useMutation, useQueryClient, useQueries } from 'react-query';
import { getPosts, getUser, updateNickname } from '../mocks/api';

// import ("./Math").then(math=>console.log(math(1,2)))

const Post = lazy(() => import('./Post'));

export default function Edit() {
  const [inputValue, setInputValue] = useState('');
  const queryClient = useQueryClient();

  const results = useQueries([
    { queryKey: ['@getUser'], queryFn: getUser, staleTime: Infinity },
    {
      queryKey: ['@getPosts'],
      queryFn: getPosts,
      staleTime: Infinity,
    },
  ]);

  const user = results[0].data;
  const posts = results[1].data;

  const mutation = useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries('@getUser');
      setInputValue('');
    },
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(inputValue);
  };

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {user?.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type='text' value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <ul>
        {posts?.map((post, idx) => (
          <Post title={post.title} />
        ))}
      </ul>
    </>
  );
}
