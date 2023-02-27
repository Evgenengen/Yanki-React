import React from "react";
import { NavLink } from "react-router-dom";

const FooterCompany = () => {
  return (
    <div className="footer__company">
      <h4 className="footer__company__title">КОМПАНИЯ</h4>
      <div className="footer__company__link" href="#">
        О нас
      </div>
      <NavLink to="/Contacts" className="footer__company__link">
        Контакты
      </NavLink>
    </div>
  );
};

export default FooterCompany;
