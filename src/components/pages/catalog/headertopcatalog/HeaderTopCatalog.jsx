import React, { useState } from "react";
import AccordionLanguage from "./accordion-language/AccordionLanguage";
import Buttons from "./buttons/Buttons";
import DropMenu from "./drop-menu/DropMenu";
import HeaderActived from "./header-actived/HeaderActived";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";

const HeaderTopCatalog = ({ value, setValue }) => {
  const [visibleDropMenu, setVisibleDropMenu] = useState(true);
  const styleClass = visibleDropMenu
    ? "uppersider__menu uppersider__menu-close"
    : "uppersider__menu";
  const [visibleMenu, setVisibleMenu] = useState(true);
  const menuClass = visibleMenu ? "menu" : "menu menu__open";
  return (
    <header className="header">
      <div className="container">
        <div className="header__top header__top__catalog">
          <Buttons
            setVisibleMenu={setVisibleMenu}
            setVisibleDropMenu={setVisibleDropMenu}
          />
          <div className={styleClass}>
            <DropMenu setVisibleDropMenu={setVisibleDropMenu} />
          </div>
          <Menu menuClass={menuClass} />
          <Logo />
          <AccordionLanguage />
          <HeaderActived value={value} setValue={setValue} />
        </div>
      </div>
    </header>
  );
};

export default HeaderTopCatalog;
