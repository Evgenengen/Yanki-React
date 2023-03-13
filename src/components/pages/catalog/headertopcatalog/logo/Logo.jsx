import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/" className="header__logo">
      <img
        className="header__logo__img"
        src="images/header-logo-2.svg"
        alt="Логотип"
      />
    </NavLink>
  );
};

export default Logo;
