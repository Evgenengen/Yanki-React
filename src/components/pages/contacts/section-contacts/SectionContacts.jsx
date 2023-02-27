import React from "react";
const SectionContacts = () => {
    return (  
<section className="contacts">
          <div className="container">
            <h4 className="contacts__title">Связаться с нами</h4>
            <div className="contacts__inner">
              <div className="contacts__social">
                <div className="contacts__subtitle">Связаться с нами</div>
                <a className="contacts__social__link" href="#">
                  <img
                    className="contacts__social__img"
                    src="images/instagram-2.svg"
                    alt=""
                  />
                </a>
                <a className="contacts__social__link" href="#">
                  <img
                    className="contacts__social__img"
                    src="images/telegram-2.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="contacts__tel">
                <div className="contacts__subtitle">По телефону</div>
                <a className="contacts__tel__link" href="tel:380671588266">
                  +38(067) 158 82 66
                </a>
                <a className="contacts__tel__link" href="tel:380732263981">
                  +38(073) 226 39 81
                </a>
              </div>
              <div className="contacts__mail">
                <div className="contacts__subtitle">По почте</div>
                <a
                  className="contacts__tel__link"
                  href="mailto:example@gmail.com"
                >
                  example@gmail.com
                </a>
              </div>
              <div className="contacts__address">
                <div className="contacts__subtitle">Наш офис</div>
                г. Киев, улица Батумская, 18
              </div>
            </div>
          </div>
        </section>
    );
}
 
export default SectionContacts;