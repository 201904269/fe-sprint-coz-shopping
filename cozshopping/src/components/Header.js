import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.png";
import ham from "../hamburg.png";
import './Headers.css';
import Menu from "./Menu";

const Header = () => {
  const [dropdownState, setDropdownState] = useState(false);
  const handleDropdown = () => {
    setDropdownState(!dropdownState);
  };
  return (
    <>
      <header>
        <Link to="/">
          <logo>
            <imgs>
            <img src={logo} alt="logo" /></imgs>
            <h2>COZ Shopping</h2>
          </logo>
        </Link>

        <ham>
          <img
            src={ham}
            onClick={handleDropdown}
          />
        </ham>
      </header>
      {dropdownState && <Menu />}
    </>
  );
}

export default Header;