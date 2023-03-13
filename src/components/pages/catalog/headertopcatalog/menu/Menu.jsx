import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ menuClass }) => {
  return (
    <nav className={menuClass}>
      <ul className="menu__list menu__list__catalog">
        <li className="menu__list__item">
          <div className="menu__list__link white">NEW</div>
        </li>
        <li className="menu__list__item">
          <NavLink
            to="/Catalog"
            className="menu__list__link menu__list__link__favorites"
          >
            КАТАЛОГ
          </NavLink>
        </li>
        <li className="menu__list__item">
          <div className="menu__list__link white">О НАС</div>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
