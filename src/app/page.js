"use client"; // This is a client component
import React, {useState, useEffect} from 'react';
import './globals.css';
import {csv} from 'd3';

const Home = () => {
  const [ticker, setTicker] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tickerData, setTickerData] = useState([]);
  
  useEffect(() => {
    csv("/stock_data.csv").then(data => {
      setTickerData(data);
    });
  }, []);

  useEffect(() => {
    console.log(tickerData);
  }, [tickerData]);


  // This function handles the form submission. It prevents default form submission from occurring and then logs current state
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ ticker, startDate, endDate });

      const filteredData = tickerData.filter((data) => {
        return (
          data.ticker === ticker &&
          new Date(data.date) >= new Date(startDate) &&
          new Date(data.date) <= new Date(endDate)
        );
      });

      console.log(filteredData);
    };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Stock Data App</h1>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ticker" className="block text-sm font-medium text-gray-700">
            Stock Ticker
          </label>
          <input
            type="text"
            id="ticker"
            value={ticker} // value={ticker} was added to make this a controlled component. This input will now display the current state of the 'ticker' state variable.
            onChange={(e) => setTicker(e.target.value)} //  onChange was added to handle updating the state when the user types into this input.
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter a stock ticker"
          />
        </div>
        <div>
          <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="mt-3 inline-flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Fetch Data
        </button>
      </form>
    </div>
  );
};

export default Home;
