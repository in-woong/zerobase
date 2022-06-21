import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Radio from '../src/components/Radio';
import BottomButton from '../src/components/BottomButton';
import RadioGroup from '../src/components/RadioGroup';
export default function accessoryChoice() {
  const router = useRouter();
  const [selectedAccesory, setSelectedAccesory] = useState({});
  console.log(selectedAccesory);
  const handleClick = () => {
    localStorage.setItem('accesory', selectedAccesory);
    router.push('/complete');
  };
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <h3 className='title'>
            모니터와 키보드 중 원하는 악세서리를 선택해주세요.
          </h3>
        </div>
      </div>
      {/* <Radio
        onChange={handleChange}
        id='monitor'
        name='accesory'
        value='monitor'
        label='monitor'
      />
      <Radio
        onChange={handleChange}
        id='keyboard'
        name='accesory'
        value='keyboard'
        label='keyboard'
      /> */}
      <RadioGroup
        name='accesory'
        onChange={(state) => setSelectedAccesory(state)}
      >
        <Radio id='monitor' name='accesory' value='monitor' label='monitor' />
        <Radio
          id='keyboard'
          name='accesory'
          value='keyboard'
          label='keyboard'
        />
      </RadioGroup>
      <BottomButton onClick={handleClick}>제출완료</BottomButton>
    </>
  );
}
