import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BottomButton from '../src/components/BottomButton';

export default function complete() {
  const router = useRouter();

  const [choice, setChoice] = useState({ device: '', accessory: '' });

  useEffect(() => {
    const device = localStorage.getItem('device');
    const accessory = localStorage.getItem('accesory');
    setChoice({ device, accessory });
  });

  const onSubmit = () => {
    router.push('/start');
  };
  const goHome = () => {
    router.push('/start');
  };
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <h3 className='title'>
            000님이 선책하신 장비는 {choice.device}, 악세서리는{' '}
            {choice.accessory}입니다. 맞으시다면 제출하기 버튼, 다시선택하시려면
            첫 화면으로 돌아가기 버튼을 클릭해주세요
          </h3>
        </div>
      </div>
      <BottomButton onClick={onSubmit}>제출하기</BottomButton>
      <BottomButton onClick={goHome}>첫 화면으로 돌아가기</BottomButton>
    </>
  );
}
