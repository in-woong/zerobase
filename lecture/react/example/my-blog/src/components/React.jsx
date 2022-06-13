import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

export default function ReactComponent() {
  return (
    <>
      <ul>
        <Link to='1'>
          <li>React 공부를 시작하면서</li>
        </Link>
        <Link to='2'>
          <li>CRA 없이 리액트 프로젝트 시작하기</li>
        </Link>
        <Link to='3'>
          <li>이제는 사용해보자 useMemo useCallback</li>
        </Link>
        <Link to='4'>
          <li>React 프로젝트에 Prettier 적용하기</li>
        </Link>
        <Link to='5'>
          <li> React setState() 제대로 사용하기</li>
        </Link>
      </ul>

      <Routes>
        <Route path='1' element={<span>TechReact Doc #1</span>} />
        <Route path='2' element={<span>TechReact Doc #2</span>} />
        <Route path='3' element={<span>TechReact Doc #3</span>} />
        <Route path='4' element={<span>TechReact Doc #4</span>} />
        <Route path='5' element={<span>TechReact Doc #5</span>} />
      </Routes>
    </>
  );
}
