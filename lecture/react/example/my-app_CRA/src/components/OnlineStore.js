import React from 'react';
import TrValue from './TrValue';

export default function OnlineStore() {
  const datas = [
    {
      category: 'Sporting Goods',
      price: '$49.99',
      stocked: true,
      name: 'Football',
    },
    {
      category: 'Sporting Goods',
      price: '$9.99',
      stocked: true,
      name: 'Baseball',
    },
    {
      category: 'Sporting Goods',
      price: '$29.99',
      stocked: false,
      name: 'Basketball',
    },
    {
      category: 'Electronics',
      price: '$99.99',
      stocked: true,
      name: 'iPod Touch',
    },
    {
      category: 'Electronics',
      price: '$399.99',
      stocked: false,
      name: 'iPhone 5',
    },
    {
      category: 'Electronics',
      price: '$199.99',
      stocked: true,
      name: 'Nexus 7',
    },
  ];

  return (
    <>
      <div>
        <input type='text' placeholder='Search...' />
        <br />
        <input type='checkbox' />
        <span>Only show products in stock</span>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <TrValue list={'Sporting Goods'} datas={datas} />
        <TrValue list={'Electronics'} datas={datas} />
      </table>
    </>
  );
}
