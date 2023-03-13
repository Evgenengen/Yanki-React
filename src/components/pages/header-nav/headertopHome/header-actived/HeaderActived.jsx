import React from "react";
import { NavLink } from "react-router-dom";
import useCounter from "../../../../hooks/use-counter";
import { useAuth } from "../../../../hooks/user-auth";

const HeaderActived = () => {
  const { counterLikes, counterBasket } = useCounter();
  const { isAuth, login } = useAuth();
  return (
    <ul className="header__actived">
      <li className="header__actived__item">
        <NavLink to="/Catalog" className="header__actived__link ">
          <img
            className="header__actived__img"
            src="images/search.svg"
            alt=""
          />
        </NavLink>
      </li>
      <li className="header__actived__item">
        <NavLink to="/Login" className="header__actived__link popup__link">
          {isAuth ? (
            <div>{login}</div>
          ) : (
            <img
              className="header__actived__img "
              src="images/login.svg"
              alt=""
            />
          )}
        </NavLink>
      </li>
      <li className="header__actived__item">
        <NavLink to="/Favorites" className="header__actived__link">
          <img
            className="header__actived__img"
            src="images/like.svg"
            alt="like"
          />
        </NavLink>
        <div className="like__counter white__counter">{counterLikes}</div>
      </li>
      <li className="header__actived__item">
        <NavLink to="/Basket" className="header__actived__link">
          <img
            className="header__actived__img"
            src="images/basket.svg"
            alt="basket"
          />
        </NavLink>
        <div className="backet__number__inner white__counter">
          {counterBasket}
        </div>
      </li>
    </ul>
  );
};

export default HeaderActived;
