import React from "react";
import { NavLink } from "react-router-dom";

const FooterUserful = () => {
  return (
    <div className="footer__userful">
      <h4 className="footer__userful__title">ПОЛЕЗНОЕ</h4>
      <NavLink to="/Payment" className="footer__userful__link">
        Оплата и доставка
      </NavLink>
      <NavLink to="/Return" className="footer__userful__link">
        Условия возврата
      </NavLink>
      <div className="footer__userful__link">
        Бонусная система
      </div>
    </div>
  );
};

export default FooterUserful;
