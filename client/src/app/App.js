import React, { useEffect, useState } from 'react';

import { YoutubeApi } from './services';
import { YoutubeSearchResults, YoutubeSearchForm } from './components';

import './App.css';

const searchStrings = [
  'pannenkoeken',
  'viva la dirt league',
  'hondjes',
  'star wars',
  'philippe'
];

const App = () => {
  const [searchResults, setSearchResults] = useState(null);
  
  useEffect(() => {
  }, []);

  const fetchData = async (q) => {
    const json = await YoutubeApi.getSearchResults(q);
    setSearchResults(json);
  };

  const handleSearch = async (q) => {
    await fetchData(q);
  };

  return (
    <div className="app">
      <div className="container-fluid">
        <YoutubeSearchForm search={handleSearch} />
        <YoutubeSearchResults results={(searchResults) ? searchResults.items : []} />
      </div>      
    </div>
  );
}

export default App;
