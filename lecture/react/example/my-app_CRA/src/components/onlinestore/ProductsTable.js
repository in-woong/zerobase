import React from 'react';
import * as S from './ProductsTable.style';

export default function ProductsTable(props) {
  const { category, items, inStockOnly } = props;
  const filteredItems = inStockOnly
    ? items.filter((item) => item.stocked)
    : items;

  return (
    <>
      <tr>
        <S.Category style={{ fontWeight: 'bold' }}>{category}</S.Category>
      </tr>

      {filteredItems.map((item, idx) => (
        <tr key={idx}>
          <S.ProductName stocked={item.stocked}>{item.name}</S.ProductName>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
}
