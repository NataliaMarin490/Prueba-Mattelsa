import React from "react";
import { Link } from "react-router-dom";
import Logo from "../media/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-ul">
          <li>
            <Link to="/">
              <img className="logo" src={Logo} alt="logo-mattelsa" />
            </Link>
          </li>
          <li>Nav 1</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
