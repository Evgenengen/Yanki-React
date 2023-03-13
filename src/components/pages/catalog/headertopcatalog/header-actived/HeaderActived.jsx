import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useCounter from "../../../../hooks/use-counter";

const HeaderActived = ({ value, setValue }) => {
  const { counterLikes, counterBasket } = useCounter();
  const [dropPanel, setDropPanel] = useState(false);
  const searchPanel = () => {
    return setDropPanel(!dropPanel);
  };
  const styleClass = dropPanel ? "search hidden" : "search";
  return (
    <ul className="header__actived">
      <li className="header__actived__item">
        <NavLink
          to="/Catalog"
          onClick={searchPanel}
          className="header__actived__link"
        >
          <img
            className="header__actived__img"
            src="images/search-2.svg"
            alt=""
          />
        </NavLink>
        <div className={styleClass}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="search__input"
            type="text"
            placeholder="Search"
          />
        </div>
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
