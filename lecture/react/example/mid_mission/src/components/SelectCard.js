import React, { useEffect, useState } from 'react';
import BusinessCard from './BusinessCard';
import cardList from '../db/cards';

export default function SelectCard() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    setCards([...cardList]);
  }, []);

  const handleClick = () => {
    if (selectedCards.length === 4) {
      windows.alert(`당첨자는 ${[...selectedCards]}입니다.`);
    }
    const idx = Math.floor(Math.random() * cards.length);
    setSelectedCard(() => cards[idx]);
    setSelectedCards(() => [...selectedCards, selectedCard]);
    const newCards = cards.filter((card) => card !== selectedCard);
    setCards(() => newCards);
    console.log(selectedCard, selectedCards, cards);
  };

  return (
    <>
      <button onClick={handleClick}>추첨하기</button>
      <BusinessCard selectedCard={selectedCard} />
    </>
  );
}
