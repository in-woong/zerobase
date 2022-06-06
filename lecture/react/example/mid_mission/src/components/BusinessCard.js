import React from 'react';

export default function BusinessCard({ selectedCard }) {
  return (
    <ul>
      <li>Company: {selectedCard.company}</li>
      <li>Team: {selectedCard.team}</li>
      <li>Name: {selectedCard.name}</li>
      <li>mail: {selectedCard.email}</li>
      <li>Phone: {selectedCard.phoneNumber}</li>
    </ul>
  );
}
