import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

export default function ReactDocPage() {
  const [data, setData] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const isLoading = { title: 'isLoading', body: 'Wait for Seconds Please' };
  useEffect(() => {
    console.log('useEffect');
    async function fetchData() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.docId}`
      );
      const result = res.json();
      return result;
    }
    setData(isLoading);
    fetchData().then((res) => setData(res));
  }, [params]);

  return (
    <>
      <button onClick={() => navigate('/')}>logo</button>
      <h3>{data.title}</h3>
      <div>ReactDocPage #{data.body}</div>
    </>
  );
}
