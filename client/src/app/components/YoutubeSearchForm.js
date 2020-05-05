import React, { useState } from 'react';

const YoutubeSearchForm = ({results, search}) => {
  const [searchString, setSeatchString] = useState('');

  const handleSearchSubmit = (ev) => {
    ev.preventDefault();
    search(searchString);
  };

  return (
    <div className="row youtube-search-form">
      <form className="col-12 col-md-6" onSubmit={handleSearchSubmit}>
        <div className="form-group">
          <label for="txtSearch">search</label>
          <input type="text" className="form-control" id="txtSearch" value={searchString} onChange={ev => setSeatchString(ev.target.value)} />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeSearchForm;
