import React, { useState } from 'react';

const Banner = () => {
  const [isBanner, setIsBanner] = useState(true);
  const handleAlert = () => {
    return alert('10% 할인 쿠폰에 당첨되었습니다.');
  };
  const handleClose = (e) => {
      e.stopPropagation();
    setIsBanner(!isBanner);
  };

  return (
    <>
      {isBanner && (
        <div
          className='banner'
          onClick={handleAlert}
          style={{
            backgroundColor: 'orange',
            fontWeight: 'bold',
            height: '50px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          이 곳을 클릭해서 쿠폰을 받아가세요.
          <button onClick={handleClose}>닫기</button>
        </div>
      )}
    </>
  );
};

export default Banner;
