import React, { useEffect, useState } from 'react';

export default function () {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }
  useEffect(() => {
    console.log('componenetDidMount');
    const timerId = setInterval(tick, 1000);
    return () => {
      console.log('componentWillUnmount');
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    console.log('componenetDidUpdate');
    console.log(date);
  }, [date]);

  return (
    <div>
      <h1>Hello,world!</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
}
