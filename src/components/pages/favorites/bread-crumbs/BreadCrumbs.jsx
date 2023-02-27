import React from "react";
import { NavLink } from "react-router-dom";
const BreadCrumbs = () => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <NavLink to='/' className="breadcrumbs__item__link" >
              Главная
            </NavLink>
          </li>
          <li className="breadcrumbs__item">
            <NavLink to='/Favorites' className="breadcrumbs__item__link">
              Избранное
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumbs;
