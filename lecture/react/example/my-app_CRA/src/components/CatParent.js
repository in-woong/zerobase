import React, { useRef } from 'react';
import Cat from './Cat';

export default function CatParent() {
  const catRef = useRef();
  console.log('부모 컴포넌트 CatParent');

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat a={'a'} ref={catRef} />
        <button onClick={() => alert(catRef.current.height)}>
          고양이의 크기를 알고 싶어
        </button>
      </div>
    </div>
  );
}
