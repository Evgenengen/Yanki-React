import { Children } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import HeaderTop from "../headertop/HeaderTop";
import "./payment.css";

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

        <section className="payment">
          <div className="container">
            <h4 className="payment__title">Оплата и доставка</h4>
            <div className="payment__items">
              <div className="payment__item">
                <div className="payment__item__title">
                  Вы можете оплатить покупку одним из ниже перечисленных
                  способов:
                </div>
                <ul className="payment__list">
                  <li className="payment__list__item">
                    наложенным платежом в отделении Новой Почты
                  </li>
                  <li className="payment__list__item">
                    денежным переводом Visa/MasterCard
                  </li>
                  <li className="payment__list__item">
                    полная предоплата через Приват 24
                  </li>
                </ul>
              </div>
              <div className="payment__item">
                <div className="payment__item__title">
                  Мы готовы предложить несколько вариантов доставки:
                </div>
                <ul className="payment__list">
                  <li className="payment__list__item">
                    отправка по всей Украине в отделение Новой Почты(1-2 дня)
                  </li>
                  <li className="payment__list__item">
                    международные сервисы доставки для жителей зарубежья:
                    Укрпочта( 1-3 недели ,DHL(3-7 дней))
                  </li>
                  <li className="payment__list__item">
                    Срок доставки: 1–2 дня с момента заказа
                  </li>
                </ul>
              </div>
            </div>
            <div className="payment__info">
              <div className="payment__info__title">
                Процесс оформления заказа с помощью LIQPAY:
              </div>
              <ul className="payment__info__list">
                <li className="payment__info__item payment__info__choose">
                  <img
                    className="payment__info__img"
                    src="images/payment-1.svg"
                    alt="payment"
                  />
                  <div>Выбрать в корзине способ оплаты "LIQPAY";</div>
                </li>
                <li className="payment__info__item payment__info__confirm">
                  <img
                    className="payment__info__img"
                    src="images/payment-2.svg"
                    alt="payment"
                  />
                  <div>Подтвердить заказ;</div>
                </li>
                <li className="payment__info__item payment__info__pay">
                  <img
                    className="payment__info__img"
                    src="images/payment-3.svg"
                    alt="payment"
                  />
                  <div>
                    После этого Вас перенаправит на сайт LIQPAY, где вы
                    выбираете удобный для вас способ оплаты: через Приват24, или
                    с помощью карты Mastercard/VISA со всего мира.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
