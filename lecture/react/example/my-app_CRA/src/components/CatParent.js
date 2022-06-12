import React, { useRef, useState } from 'react';
import Cat from './Cat';

export default function CatParent() {
  const [height, setHeight] = useState(0);
  const catCallbackRef = (node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  };
  const catRef = useRef();
  console.log('부모 컴포넌트 CatParent');

  const ageRef = useRef(1);

  console.log(ageRef.current);
  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat a={'a'} ref={catCallbackRef} />
        <h3>나이:{`${ageRef.current}`}</h3>
        <h4>키 :{`${height}`}</h4>
        {/* <button onClick={() => alert(catRef.current.height)}>
          고양이의 크기를 알고 싶어
        </button> */}
        <button
          onClick={() => {
            ageRef.current++;
          }}
        >
          새해
        </button>
        {/* <button
          onClick={() => {
            setAge(age + 1);
          }}
        >
          ++
        </button> */}
      </div>
    </div>
  );
}
