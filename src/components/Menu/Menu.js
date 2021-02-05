import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = ({ showMenu }) => {
  return (
    <div
      className={`menu p-12 z-10 md:w-1/2 text-4xl fixed top-0 w-screen h-screen ${
        showMenu ? 'menu--show' : 'menu--hidden'
      }`}>
      <ul>
        <li>
          <Link to="/">Programación</Link>
        </li>
        <li>
          <Link to="/info/residencia">Residencia</Link>
        </li>
        <li>
          <Link to="/">Educativa</Link>
        </li>
        <li>
          <Link to="/">Archivo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
