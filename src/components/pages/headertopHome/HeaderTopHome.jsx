import React,{useState} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeaderTopHome = () => {
  const [visibleDropMenu, setVisibleDropMenu] = useState(true)
  const clazz = visibleDropMenu ? 'uppersider__menu uppersider__menu-close' : 'uppersider__menu'

  const counterLike = useSelector(state => state.products.products.filter(item => item.active === true))
  let counterLikes = counterLike.length
  
  const counterProducts = useSelector(state => state.products.products.filter(item => item.count > 0))
  let counterBasket = counterProducts.length

  const openDropMenu = () => setVisibleDropMenu(false)
    const closeDropMenu = (e) => {
      return (
        setVisibleDropMenu(true)
      )}
  return (
    <header className="header header__bg">
      <div className="container">
        <div className="header__top">
          <button 
          onClick={openDropMenu}  
          className="header__btn">
            <img
              className="header__btn__img"
              src="images/header-btn.svg"
              alt=""
            />
          </button>
          <button className="menu__button">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={clazz}>
            <div className="uppersider__menu__inner">
              <button onClick={closeDropMenu} className="uppersider__menu__close">
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
          </div>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list__item">
                <div className="menu__list__link">
                  NEW
                </div>
              </li>
              <li className="menu__list__item">
                <NavLink to="/Catalog" className="menu__list__link">
                  КАТАЛОГ
                </NavLink>
              </li>
              <li className="menu__list__item">
                <div className="menu__list__link">
                  О НАС
                </div>
              </li>
            </ul>
          </nav>
          <NavLink to="/" className="header__logo">
            <img
              className="header__logo__img"
              src="images/header-logo.svg"
              alt="Логотип"
            />
          </NavLink>
          <ul className="accordion__language__inner">
            <li className="accordion__language">
              <select className="accordion__language__box">
                <option value="1">RUS</option>
                <option value="2">UA</option>
                <option value="3">EN</option>
              </select>
            </li>
            <li className="accordion__language">
              <select className="accordion__language__box">
                <option value="1">UAN</option>
                <option value="2">EUR</option>
                <option value="3">USD</option>
              </select>
            </li>
          </ul>
          <ul className="header__actived">
            <li className="header__actived__item">
              <NavLink to="/Catalog" className="header__actived__link ">
                <img
                  className="header__actived__img"
                  src="images/search.svg"
                  alt=""
                />
              </NavLink>
            </li>
            <li className="header__actived__item">
              <NavLink to='/Login' className="header__actived__link popup__link">
                <img
                  className="header__actived__img "
                  src="images/login.svg"
                  alt=""
                />
              </NavLink>
            </li>
            <li className="header__actived__item">
              <NavLink to="/Favorites" className="header__actived__link">
                <img
                  className="header__actived__img"
                  src="images/like.svg"
                  alt=""
                />
              </NavLink>
              <div className="like__counter white__counter">{counterLikes}</div>
            </li>
            <li className="header__actived__item">
              <NavLink to="/Basket" className="header__actived__link">
                <img
                  className="header__actived__img"
                  src="images/basket.svg"
                  alt=""
                />
              </NavLink>
              <div className="backet__number__inner white__counter">{counterBasket}</div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderTopHome;
