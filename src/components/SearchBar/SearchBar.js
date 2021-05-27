import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.scss';

const SearchBar = withRouter(({ history }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onKeyUp = (e) => {
    if (e.which === 13) {
      redirect();
    }
  };

  const onChange = (e) => setSearchTerm(e.target.value);

  const redirect = () => {
    if (searchTerm.length > 0) history.push(`/busqueda/${searchTerm}`);
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="search-bar w-full pl-2"
        name="search"
        placeholder="buscar"
        onKeyUp={onKeyUp}
        onChange={onChange}
        value={searchTerm}
      />
      <button className="ml-2" onClick={redirect}>
        <FaSearch />
      </button>
    </div>
  );
});

export default SearchBar;
