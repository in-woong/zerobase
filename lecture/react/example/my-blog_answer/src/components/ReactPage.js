import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';

export default function ReactPage() {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      return result.data;
    }
    fetchData().then((res) => setDocs(res));
  }, []);

  return (
    <div>
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
