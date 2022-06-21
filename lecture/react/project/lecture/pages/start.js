import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BottomButton from '../src/components/BottomButton';
import { fetchUser } from '../src/modules/api';

export default function start() {
  const [user, setUser] = useState('');
  const router = useRouter();
  useEffect(() => {
    async function fetch() {
      const res = await fetchUser();
      setUser(res.name);
    }
    fetch();
  }, []);

  const handleClick = () => {
    router.push('/device-choice');
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <h3 className='title'>
          {user}님, 입사를 축하드립니다! 원하시는 개발 장비를 선택해주세요.
        </h3>
      </div>
      <BottomButton onClick={handleClick}>
        장비선택 화면으로 넘어가기
      </BottomButton>
    </div>
  );
}
