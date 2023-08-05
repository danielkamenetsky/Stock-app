import React from 'react';
import './globals.css';

const Home = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Stock Data App</h1>
      <form className="space-y-2">
        <div>
          <label htmlFor="ticker" className="block text-sm font-medium text-gray-700">
            Stock Ticker
          </label>
          <input
            type="text"
            id="ticker"
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
