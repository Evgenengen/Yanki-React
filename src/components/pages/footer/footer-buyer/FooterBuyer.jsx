import React from "react";
import { NavLink } from "react-router-dom";

const FooterBuyer = () => {
  return (
    <div className="footer__buyer">
      <h4 className="footer__buyer__title">ПОКУПАТЕЛЮ</h4>
      <NavLink to="/Favorites" className="footer__buyer__link">
        Избранное
      </NavLink>
      <div className="footer__buyer__link">
        Публичная оферта
      </div>
      <div className="footer__buyer__link">
        Политика конфиденциальности
      </div>
    </div>
  );
};

export default FooterBuyer;
