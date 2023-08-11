import React from 'react';

const StockRow = ({ stockData }) => {
  return (
    <tr>
      <td>{stockData.symbol}</td>
      <td>{stockData.lastSalePrice}</td>
      <td>{stockData.lastSaleSize}</td>
      <td>{stockData.volume}</td>
    </tr>
  );
};

export default StockRow;
