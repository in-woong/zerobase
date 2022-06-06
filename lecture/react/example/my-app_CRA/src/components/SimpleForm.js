import React, { useState } from 'react';

export default function SimpleForm() {
  const [nickName, setNickName] = useState();
  const handleChange = (e) => {
    setNickName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(nickName);
    //
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임: </label>
      <input
        type='text'
        name='nickname'
        onChange={handleChange}
        value={nickName}
      />
      <input type='submit' value='제출' />
    </form>
  );
}
