import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockTable from './stocktable';

const App = () => {
  const [stockData, setStockData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const stocksPerPage = 10;

  useEffect(() => {
    const GetStockData = async () => {
      try {
        const response = await axios.get('https://cloud.iexapis.com/stable/tops', {
          params: {
            token: process.env.REACT_APP_TOKEN,
          },
        });  
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    GetStockData();
  }, []);

  const nextPage = () => {
    if ((currentPage + 1) * stocksPerPage <= stockData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * stocksPerPage;
  const endIndex = startIndex + stocksPerPage;
  const displayedStocks = stockData.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Stocks</h1>
      <StockTable stockData={displayedStocks} />
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Предыдущие
        </button>
        <button onClick={nextPage} disabled={endIndex >= stockData.length}>
          Следующие
        </button>
      </div>
    </div>
  );
};

export default App;
