import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

const Menu = ({closeMenu}) => {
  const handleMenuClick = () => {
    closeMenu(); // 메뉴를 클릭하면 closeMenu 함수를 호출하여 메뉴를 닫습니다.
  };
  return (
    <menu>
      <li>OOO님, 안녕하세요!</li>
      <Link to="/product/list"  onClick={handleMenuClick}>
        <li>상품리스트 페이지</li>
      </Link><Link to="/bookmark"  onClick={handleMenuClick}>
        <li>북마크 페이지</li>
      </Link>
    </menu>
  );
};

export default Menu;