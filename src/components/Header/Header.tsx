import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = ():JSX.Element => {
  return (
    <header className="header">
        <nav>
          <ul className="navigation">
            <li>
              <NavLink exact to="/" className="nav-button" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/about" className="nav-button" activeClassName="active">About</NavLink>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;