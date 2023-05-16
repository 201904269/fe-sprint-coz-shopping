import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <menu>
      <li>OOO님, 안녕하세요!</li>
      <Link to="/product">
        <li>상품리스트 페이지</li>
      </Link><Link to="/bookmark">
        <li>북마크 페이지</li>
      </Link>
    </menu>
  );
};

export default Menu;