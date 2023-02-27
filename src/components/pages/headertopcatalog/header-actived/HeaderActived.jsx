import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeaderActived = () => {
  const [dropPanel, setDropPanel] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const catalogList = useSelector((state) => state.products.products);
  const searchPanel = () => {
    return setDropPanel(!dropPanel);
  };
  const styleClass = dropPanel ? "search hidden" : "search";
  const counterLike = useSelector((state) =>
    state.products.products.filter((item) => item.active === true)
  );
  let counterLikes = counterLike.length;
  const products = useSelector((state) =>
    state.products.products.filter((item) => item.count > 0)
  );
  let counterBasket = products.length;

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const searchCatalog = catalogList.filter((item) => {
    return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
  });
  // useEffect(() => {
  //   dispatch({ type: "SEARCH_PANEL", payload: searchCatalog });
  // }, [value, searchCatalog]);
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
            onChange={onChange}
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
