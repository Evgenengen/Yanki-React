import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeaderActived = () => {
  
  const counterLike = useSelector((state) =>
    state.products.products.filter((item) => item.active === true)
  );
  let counterLikes = counterLike.length;
  const products = useSelector((state) =>
    state.products.products.filter((item) => item.count > 0)
  );
  let counterBasket = products.length;


  return (
    <ul className="header__actived">
      <li className="header__actived__item">
        <NavLink to='/Catalog' className="header__actived__link">
          <img
            className="header__actived__img"
            src="images/search-2.svg"
            alt=""
          />
        </NavLink>
       
      </li>
      <li className="header__actived__item">
        <div className="header__actived__link popup__link">
          <img
            className="header__actived__img"
            src="images/login-2.svg"
            alt=""
          />
        </div>
      </li>
      <li className="header__actived__item">
        <NavLink to="/Favorites" className="header__actived__link">
          <img
            className="header__actived__img"
            src="images/like-2.svg"
            alt=""
          />
        </NavLink>
        <div className="like__counter">{counterLikes}</div>
      </li>
      <li className="header__actived__item">
        <NavLink to="/Basket" className="header__actived__link">
          <img
            className="header__actived__img"
            src="images/basket-2.svg"
            alt=""
          />
          <div className="backet__number__inner">{counterBasket}</div>
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderActived;
