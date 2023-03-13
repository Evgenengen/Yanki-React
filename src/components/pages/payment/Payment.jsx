import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import HeaderTop from "../header-nav/headertop/HeaderTop";
import "./payment.css";
import SectionPayment from "./section-payment/SectionPayment";

const Payment = () => {
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
                <NavLink to="/Payment" className="breadcrumbs__item__link">
                  Оплата и доставка
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <SectionPayment />
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
