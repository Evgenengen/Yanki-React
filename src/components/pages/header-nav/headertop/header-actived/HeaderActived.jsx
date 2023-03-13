import React from "react";
import { NavLink } from "react-router-dom";
import useCounter from "../../../../hooks/use-counter";

const HeaderActived = () => {
  const { counterLikes, counterBasket } = useCounter();
  return (
    <ul className="header__actived">
      <li className="header__actived__item">
        <NavLink to="/Catalog" className="header__actived__link">
          <img
            className="header__actived__img"
            src="images/search-2.svg"
            alt="search"
          />
        </NavLink>
      </li>
      <li className="header__actived__item">
        <div className="header__actived__link popup__link">
          <img
            className="header__actived__img"
            src="images/login-2.svg"
            alt="login"
          />
        </div>
      </li>
      <li className="header__actived__item">
        <NavLink to="/Favorites" className="header__actived__link">
          <img
            className="header__actived__img"
            src="images/like-2.svg"
            alt="like"
          />
        </NavLink>
        <div className="like__counter">{counterLikes}</div>
      </li>
      <li className="header__actived__item">
        <NavLink to="/Basket" className="header__actived__link">
          <img
            className="header__actived__img"
            src="images/basket-2.svg"
            alt="basket"
          />
          <div className="backet__number__inner">{counterBasket}</div>
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderActived;
