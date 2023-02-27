import React from "react";
const FooterContacts = () => {
    return ( 
        <div className="footer__contacts">
            <h4 className="footer__contacts__title">КОНТАКТЫ</h4>
            <div className="footer__contacts__social">
              <div className="footer__contacts__social-link" >
                <img
                  className="footer__contacts__img"
                  src="images/instagram.svg"
                  alt="instagram"
                />
              </div>
              <div className="footer__contacts__social-link">
                <img
                  className="footer__contacts__img"
                  src="images/telegram.svg"
                  alt="telegram"
                />
              </div>
            </div>
            <a className="footer__contacts__tel" href="tel:380730963644">
              +38(073) 096 36 44
            </a>
            <a className="footer__contacts__link" href="mailto:info@yanki.com">
              info@yanki.com
            </a>
          </div>
     );
}
 
export default FooterContacts;