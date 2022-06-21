import React, { useState } from 'react';
import { useRouter } from 'next/router';
import BottomButton from '../src/components/BottomButton';

import RadioGroup from '../src/components/RadioGroup';
import Radio from '../src/components/Radio';

export default function deviceChoice() {
  const router = useRouter();
  const [selectedDevice, setSelectedDevice] = useState();
  
  const handleClick = () => {
    localStorage.setItem("device",selectedDevice)
    router.push('/accessory-choice');
  };
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <h3 className='title'>
            아이맥과 맥북 중 원하는 장비를 선택해주세요.
          </h3>
        </div>
      </div>
      <RadioGroup name='device' onChange={(state) => setSelectedDevice(state)}>
        <Radio id='iMac' name='device' value='iMac' label='iMac' />
        <Radio id='MacBook' name='device' value='MacBook' label='MacBook' />
      </RadioGroup>
      <BottomButton onClick={handleClick}>악세서리를 선택하세요</BottomButton>
    </>
  );
}
