import React from 'react';

export default function SearchBar(props) {
  const { text, inStockOnly } = props.filter;

  const handleText = (e) => {
    props.updateFilter(e.target.name, e.target.value);
  };
  
  const handleCheck = (e) => {
    props.updateFilter(e.target.name, e.target.checked);
  };

  return (
    <>
      <input
        placeholder='Search...'
        name={'text'}
        value={text}
        onChange={handleText}
      />
      <div>
        <input
          type='checkbox'
          id='stock'
          name={'inStockOnly'}
          checked={inStockOnly}
          onChange={handleCheck}
        />
        <label htmlFor='stocks'>Only show products in stock</label>
      </div>
    </>
  );
}
