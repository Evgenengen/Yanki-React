import React, { useState } from "react";
import useDropdownMenu from "../../../hooks/use-dropdown";
import AccordionLanguage from "./accordion-language/AccordionLanguage";
import Buttons from "./buttons/Buttons";
import DropMenu from "./drop-menu/DropMenu";
import HeaderActived from "./header-actived/HeaderActived";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";

const HeaderTopHome = () => {
  const menuDropdown = useDropdownMenu(true);
  const { dropdownMenu, visibleDropMenu, setVisibleDropMenu } = menuDropdown;
  // const [visibleDropMenu, setVisibleDropMenu] = useState(true);
  const clazz = visibleDropMenu
    ? "uppersider__menu uppersider__menu-close"
    : "uppersider__menu";
  const [visibleMenu, setVisibleMenu] = useState(true);

  const menuClass = visibleMenu ? "menu" : "menu menu__open";
  return (
    <header className="header header__bg">
      <div className="container">
        <div className="header__top">
          <Buttons
            setVisibleMenu={setVisibleMenu}
            dropdownMenu={dropdownMenu}
            setVisibleDropMenu={setVisibleDropMenu}
          />
          <div className={clazz}>
            <DropMenu setVisibleDropMenu={setVisibleDropMenu} />
          </div>
          <Menu menuClass={menuClass} />
          <Logo />
          <AccordionLanguage />
          <HeaderActived />
        </div>
      </div>
    </header>
  );
};

export default HeaderTopHome;
