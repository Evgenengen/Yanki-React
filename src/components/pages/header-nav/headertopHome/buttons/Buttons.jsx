import React from "react";
const Buttons = ({ setVisibleDropMenu, setVisibleMenu, dropdownMenu }) => {
  const classAdd = () => setVisibleMenu(prev => !prev)
  
  return (
    <div>
      <button onClick={dropdownMenu} className="header__btn">
        <img className="header__btn__img" src="images/header-btn.svg" alt="btn" />
      </button>
      <button onClick={classAdd} className="menu__button">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Buttons;
