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
          <li>
            <Link to="/empleados">
              <button type="button" className="btn-navbar">
                Registro Empleados
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
