import React, { useState } from "react";
import AccordionLanguage from "./accordion-language/AccordionLanguage";
import Buttons from "./buttons/Buttons";
import DropMenu from "./drop-menu/DropMenu";
import HeaderActived from "./header-actived/HeaderActived";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";

const HeaderTop = () => {
  const [visibleDropMenu, setVisibleDropMenu] = useState(true);
  const styleClass = visibleDropMenu
    ? "uppersider__menu uppersider__menu-close"
    : "uppersider__menu";
  return (
    <header className="header">
      <div className="container">
        <div className="header__top header__top__catalog">
          <Buttons setVisibleDropMenu={setVisibleDropMenu} />
          <div className={styleClass}>
            <DropMenu setVisibleDropMenu={setVisibleDropMenu} />
          </div>
          <Menu />
          <Logo />
          <AccordionLanguage />
          <HeaderActived />
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
