import React from "react";
import { NavLink } from "react-router-dom";
const BreadCrubms = () => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <NavLink to="/" className="breadcrumbs__item__link">
              Главная
            </NavLink>
          </li>
          <li to="/Catalog" className="breadcrumbs__item">
            <NavLink className="breadcrumbs__item__link">Каталог</NavLink>
          </li>
          <li className="breadcrumbs__item">
            <div className="breadcrumbs__item__link">Пальто</div>
          </li>
          <li className="breadcrumbs__item">
            <div className="breadcrumbs__item__link">Кремовое пальто</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrubms;
