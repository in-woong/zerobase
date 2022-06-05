import React from 'react';

export default function BusinessCard({ selectedCard }) {
  return (
    <>
      <h1>{selectedCard && selectedCard.name}</h1>
    </>
  );
}
