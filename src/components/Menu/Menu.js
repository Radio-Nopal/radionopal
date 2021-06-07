import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Menu.scss';

const Menu = ({ showMenu }) => {
  return (
    <div
      className={`menu p-12 z-10 text-4xl fixed top-0 w-screen h-screen ${
        showMenu ? 'menu--show' : 'menu--hidden'
      }`}>
      <ul>
        <li>
          <Link to="/programacion">Programación</Link>
        </li>
        <li>
          <Link to="/info/residencia">Residencia</Link>
        </li>
        <li>
          <Link to="/info/educativa">Educativa</Link>
        </li>
        <li>
          <Link to="/archivo">Archivo</Link>
        </li>
        <br />
        <li>
          <SearchBar />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
