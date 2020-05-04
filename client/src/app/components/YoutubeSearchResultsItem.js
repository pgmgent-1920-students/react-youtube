import React from 'react';

const YoutubeSearchResultsItem = ({item}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card youtube-search-results__item">
        <picture className="card-img-top picture">
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
        </picture>
        <div className="card-body">
          <h5 className="card-title">{item.snippet.title}</h5>
          <p className="card-text">{item.snippet.description}</p>
        </div>
        <div className="card-body">
          <span className="badge badge-pill badge-light">{item.snippet.channelTitle}</span>
        </div>
      </div>
    </div>
  );
}

export default YoutubeSearchResultsItem;
