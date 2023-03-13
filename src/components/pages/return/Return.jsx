import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import HeaderTop from "../header-nav/headertop/HeaderTop";
import "./return.css";
import SectionReturn from "./section-return/SectionReturn";
const Return = () => {
  return (
    <div>
      <HeaderTop />
      <main className="main">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <NavLink to="/" className="breadcrumbs__item__link">
                  Главная
                </NavLink>
              </li>
              <li className="breadcrumbs__item">
                <NavLink to="/Return" className="breadcrumbs__item__link">
                  Обмен и воврат
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <SectionReturn />
      </main>
      <Footer />
    </div>
  );
};

export default Return;
