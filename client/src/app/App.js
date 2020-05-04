import React, { useEffect, useState } from 'react';

import { YoutubeApi } from './services';
import { YoutubeSearchResults } from './components';

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
    const fetchData = async () => {
      const json = await YoutubeApi.getSearchResults(searchStrings[Math.floor(Math.random()*searchStrings.length)]);
      setSearchResults(json);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="container-fluid">
        <YoutubeSearchResults results={(searchResults) ? searchResults.items : []} />
      </div>      
    </div>
  );
}

export default App;
