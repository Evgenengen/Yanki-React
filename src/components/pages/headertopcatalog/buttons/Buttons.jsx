import React from "react";
const Buttnos = ({setVisibleDropMenu}) => {
  const openDropMenu = () => setVisibleDropMenu(false);

  return (
    <div>
      <button onClick={openDropMenu} className="header__btn">
        <img
          className="header__btn__img"
          src="images/header-btn-2.svg"
          alt=""
        />
      </button>
      <button className="menu__button menu__button__black">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Buttnos;
