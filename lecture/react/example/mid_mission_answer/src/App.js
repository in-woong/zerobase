import { useEffect, useState } from 'react';
import './App.css';
import BusinessCard from './components/BusinessCard';
import datas from './data/cards';

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  const draw = () => {
    if (selectedCards.length > 2) {
      const names = selectedCards.reduce((acc, cur) => {
        return (acc = acc.concat(`${cur.name},`));
      }, '');
      return alert(`당첨자는 ${names}입니다.`);
    }
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    const newCards = cards.filter(
      (card) => card.phoneNumber !== randomItem.phoneNumber
    );
    setCards(newCards);

    setSelectedCards([...selectedCards, randomItem]);
  };

  useEffect(() => {
    setCards(datas);
  }, []);

  return (
    <div>
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {selectedCards.length > 0 && (
        <BusinessCard selectedCard={selectedCards[selectedCards.length - 1]} />
      )}
    </div>
  );
}

export default App;
