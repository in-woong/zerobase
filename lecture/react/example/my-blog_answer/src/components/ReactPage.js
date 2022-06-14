import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function ReactPage() {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await res.json();
      setDocs(result);
    }
    fetchData();
  }, []);
  // const docs = [
  //   { id: 1, title: 'React 공부를 시작하면서', date: '05/01/2021' },
  //   { id: 2, title: 'CRA 없이 리액트 프로젝트 시작하기', date: '12/01/2021' },
  //   {
  //     id: 3,
  //     title: '이제는 사용해보자 useMEmo & useCallback',
  //     date: '31/01/2021',
  //   },
  //   { id: 4, title: 'React 프로젝트에 Prettier 적용하기', date: '15/02/2021' },
  //   { id: 5, title: 'React의 setState', date: '03/03/2022' },
  // ];
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
      <Outlet docs={docs} />
    </div>
  );
}
