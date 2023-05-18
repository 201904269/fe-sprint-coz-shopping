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
  const closeMenu = () => {
    setDropdownState(false); // 메뉴를 닫는 함수입니다.
  };
  return (
    <>
      <header>
        <Link to="/" onClick={closeMenu}>
          <logo>
            <imgs>
            <img src={logo} alt="logo" /></imgs>
            <h2>COZ Shopping</h2>
          </logo>
        </Link>
        <img
            className="ham"
            src={ham}
            onClick={handleDropdown}
        />
        
      </header>
      {dropdownState && <Menu closeMenu={closeMenu}/>}
    </>
  );
}

export default Header;