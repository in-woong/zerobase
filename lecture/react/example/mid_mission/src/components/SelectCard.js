import React, { useEffect, useState } from 'react';
import BusinessCard from './BusinessCard';
import cardList from '../db/cards';

export default function SelectCard() {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    setCards(cardList);
  }, []);

  const handleClick = () => {
    if (selectedCards.length > 2) {
      let names = '';
      selectedCards.forEach((card) => {
        names = names + `${card.name}, `;
      });
      return alert(`당첨자는 ${names}입니다.`);
    }
    const idx = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[idx];
    setSelectedCards([...selectedCards, selectedCard]);
    const newCards = cards.filter(
      (card) => card.phoneNumber !== selectedCard.phoneNumber
    );
    setCards(newCards);
  };

  console.log(selectedCards, cards);

  return (
    <>
      <button onClick={handleClick}>추첨하기</button>
      <BusinessCard selectedCard={selectedCards[selectedCards.length - 1]} />
    </>
  );
}
