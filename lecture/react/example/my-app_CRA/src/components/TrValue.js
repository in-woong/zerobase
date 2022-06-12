import React from 'react';

export default function TrValue({ list, datas }) {
  return (
    <>
      <tr>
        <th>{list}</th>
      </tr>
      {datas
        .filter((data) => data.category == list)
        .map((data) => (
          <tr>
            <th>{data.name}</th>
            <th>{data.price}</th>
          </tr>
        ))}
    </>
  );
}
