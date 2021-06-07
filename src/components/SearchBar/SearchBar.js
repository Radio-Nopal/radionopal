import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.scss';

const SearchBar = withRouter(({ history, fullWidth }) => {
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
    <div className={`search-bar ${fullWidth ? '' : 'md:w-2/5'} w-full flex`}>
      <button className="ml-2" onClick={redirect}>
        <FaSearch />
      </button>
      <input
        type="text"
        className="w-full pl-2"
        name="search"
        placeholder="buscar"
        onKeyUp={onKeyUp}
        onChange={onChange}
        value={searchTerm}
      />
    </div>
  );
});

export default SearchBar;
