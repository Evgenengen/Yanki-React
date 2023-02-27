import React from "react";
import FooterBuyer from "./footer-buyer/FooterBuyer";
import FooterCompany from "./footer-company/FooterCompany";
import FooterContacts from "./footer-contacts/FooterContacts";
import FooterUserful from "./footer-userful/FooterUserful";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <FooterCompany />
          <FooterUserful />
          <FooterBuyer />
          <FooterContacts />
        </div>
        <div className="footer__copy">
          <div className="footer__copy__link">
            ©️ 2021 Yanki. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
