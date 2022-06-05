import React, { useState } from 'react';

export default function Counter() {
  const operators = ['+', '-', '*'];

  const [info, setInfo] = useState({
    count: 0,
    show: true,
    operator: operators[0],
  });

  console.log(info);

  return (
    <div>
      <button
        onClick={() => {
          let result;
          if (info.operator === '+') result = info.count + 1;
          else if (info.operator === '*') result = info.count * 1;
          else if (info.operator === '-') result = info.count - 1;
          setInfo({ ...info, count: result });
        }}
      >
        {info.operator}1
      </button>
      <button
        onClick={() => {
          //   info.show = !info.show;
          //   const newInfo = info;
          const newInfo = { ...info, show: !info.show };
          setInfo(newInfo);
        }}
      >
        Show and Hide
      </button>
      <button
        onClick={() => {
          const idx = Math.floor(Math.random() * operators.length);
          setInfo({ ...info, operator: operators[idx] });
        }}
      >
        Change Operator
      </button>
      <br />
      {info.show && `Counter: ${info.count}`}
    </div>
  );
}
