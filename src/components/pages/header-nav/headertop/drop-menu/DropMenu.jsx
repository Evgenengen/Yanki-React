import React from "react";
import { NavLink } from "react-router-dom";

const DropMenu = ({ setVisibleDropMenu }) => {
  return (
    <div className="uppersider__menu__inner">
      <button onClick={() => setVisibleDropMenu(true)} className="uppersider__menu__close">
        <img src="images/close-btn.svg" alt="" />
      </button>
      <div className="uppersider__menu__row">
        <NavLink to="/Payment" className="uppersider__menu__item">
          ОПЛАТА И ДОСТАВКА
        </NavLink>
        <NavLink to="/Return" className="uppersider__menu__item">
          УСЛОВИЯ ВОЗВРАТА
        </NavLink>
        <NavLink to="/Contacts" className="uppersider__menu__item">
          КОНТАКТЫ
        </NavLink>
      </div>
    </div>
  );
};

export default DropMenu;
