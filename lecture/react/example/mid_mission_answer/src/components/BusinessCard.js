import React from 'react';

export default function BusinessCard({ selectedCard }) {
  return (
    <>
      <div>회사:{selectedCard.company}</div>
      <div>이름:{selectedCard.name}</div>
      <div>메일:{selectedCard.email}</div>
      <div>전화번호:{selectedCard.phoneNumber}</div>
    </>
  );
}
