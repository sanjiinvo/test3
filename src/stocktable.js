import React from 'react';
import StockRow from './stockRow';

const StockTable = ({ stockData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Last Sale Price</th>
          <th>Last Sale Size</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {stockData.map(stock => (
          <StockRow key={stock.symbol} stockData={stock} />
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
