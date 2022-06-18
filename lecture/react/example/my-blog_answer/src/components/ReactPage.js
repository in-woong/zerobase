import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

export default function ReactPage() {
  const [number, setNumer] = useState(0);
  async function fetcher(url) {
    const result = await axios.get(url);
    console.log(result.data);
    return result.data;
  }
  const { data: docs, error } = useSWR('posts', () =>
    fetcher('https://jsonplaceholder.typicode.com/posts')
  );

  if (error) return <div>fail to load</div>;
  if (!docs) return <div>loading...</div>;
  return (
    <div>
      <button onClick={() => setNumer(number + 1)}>{number}</button>
      {docs.map((doc) => (
        <Link
          key={doc.id}
          to={`${doc.id}`}
          style={{ display: 'block', margin: '1rem 0' }}
        >
          {doc.title}
        </Link>
      ))}
      <Outlet />
    </div>
  );
}
