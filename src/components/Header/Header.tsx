import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = ():JSX.Element => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;