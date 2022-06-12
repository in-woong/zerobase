import React, { useRef } from 'react';

//ref 활용 -> 비제어 컴포넌트 방식으로 Form 다루기
export default function UncontrolledForm() {
  const inputRef = useRef();
  //   const handleChange = (e) => {
  //     console.log(e.target.value);
  //   };

  console.log(inputRef);
  console.log(inputRef.current);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
    inputRef.current.focus();
  };
  return (
    <form action='submit' onSubmit={handleSubmit}>
      <label>닉네임 :</label>
      <input type='text' ref={inputRef} name='nickname' />
      <input type='submit' value='제출' />
    </form>
  );
}
