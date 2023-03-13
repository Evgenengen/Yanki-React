import React from "react";
import { NavLink } from "react-router-dom";

const DropMenu = ({ setVisibleDropMenu }) => {
  const openDropMenu = () => setVisibleDropMenu((prev) => !prev);

  return (
    <div className="uppersider__menu__inner">
      <button className="uppersider__menu__close">
        <img onClick={openDropMenu} src="images/close-btn.svg" alt="close" />
      </button>
      <div className="uppersider__menu__row">
        <NavLink to="/Payment" className="uppersider__menu__item">
          ОПЛАТА b ДОСТАВКА
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
