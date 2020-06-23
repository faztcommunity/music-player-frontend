import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '@icons/search.svg';

const Search = ({ search }) => {
  const [artists, setSearchValue] = useState('');
  console.log('Artista search > ', artists);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(artists);
    resetInputField();
  };

  return (
    <div className="wrap">
      <div className="search">
        <button type="submit" className="searchButton">
          <SearchIcon className="iconSearch" />
        </button>
        <input
          className="searchTerm"
          type="text"
          value={artists}
          onChange={handleSearchInputChanges}
          placeholder="Busca tu álbum favorito"
        />
      </div>
    </div>
  );
};

export default Search;
