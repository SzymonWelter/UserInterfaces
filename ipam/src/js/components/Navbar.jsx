import React from "react";
import {navbarModel} from 'src/js/models';
import {Link} from 'react-router-dom'; 
const Navbar = props => (
  <div className=" main-navbar-wrapper">
    <nav className="main-navbar">
      <ul className="nav flex-column">
        {navbarModel.map((v, i) => 
        <li className="nav-item main-navbar__item" key={i}>
          <Link className="nav-link main-navbar__link" to={v.to}>
            {v.name}
          </Link>
        </li>
        )}
      </ul>
    </nav>
  </div>
);

export default Navbar;
