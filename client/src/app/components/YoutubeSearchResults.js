import React from 'react';

import YoutubeSearchResultsItem from './YoutubeSearchResultsItem';

import './YoutubeSearchResults.css';

const YoutubeSearchResults = ({results}) => {
  return (
    <div className="row youtube-search-results align-items-center">
      {results && results.map((item, index) => { 
        return (
          <YoutubeSearchResultsItem item={item} key={item.etag} />
        )
      })}
    </div>
  );
}

export default YoutubeSearchResults;
