import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({menuClass}) => {
  return (
    <nav className={menuClass}>
      <ul className="menu__list">
        <li className="menu__list__item">
          <div className="menu__list__link">NEW</div>
        </li>
        <li className="menu__list__item">
          <NavLink to="/Catalog" className="menu__list__link">
            КАТАЛОГ
          </NavLink>
        </li>
        <li className="menu__list__item">
          <div className="menu__list__link">О НАС</div>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
