import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockTable from './stocktable';

const App = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get('https://cloud.iexapis.com/stable/tops', {
          params: {
            token: 'pk_c9646e0ddd1c49b0927016026326c1b2',
          },
        });
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      <h1>Stocks</h1>
      <StockTable stockData={stockData} />
    </div>
  );
};

export default App;
