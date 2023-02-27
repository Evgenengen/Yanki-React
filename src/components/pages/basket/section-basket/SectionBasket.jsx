import React from "react";
import { NavLink } from "react-router-dom";
import BasketItem from "../basket-item/BasketItem";

const SectionBasket = ({ dispatch, products }) => {
  let price = products.reduce((total, product) => total + product.price*product.count, 0);
 
  return (
    <section className="basket">
      <div className="container">
        <div className="basket__inner">
          <div className="basket__top">
            <h4 className="basket__title">Ваш заказ</h4>
            <BasketItem dispatch={dispatch} products={products} />
            <div className="backet__top__sum">
              <div>К оплате:</div>
              <div className="backet__sum__total">{price} грн</div>
            </div>
          </div>
          <div className="basket__bottom">
            <form className="form__basket">
              <h4 className="form__basket__title">Оформление заказа</h4>
              <div className="form__basket__subtitle">Персональные данные:</div>
              <div className="form__basket__info">
                <input
                  className="form__basket__input"
                  type="text"
                  placeholder="Ваше имя*"
                />
                <input
                  className="form__basket__input"
                  type="text"
                  placeholder="Ваша фамилия*"
                />
                <input
                  className="form__basket__input"
                  type="text"
                  placeholder="Ваш e-mail*"
                />
                <input
                  className="form__basket__input"
                  type="text"
                  placeholder="Ваш телефон*"
                />
              </div>
              <div className="form__basket__delivery">
                <div className="form__basket__subtitle">Способ доставки:</div>
                <div className="form__delivery__items">
                  <div className="form__delivery__item">
                    <div className="form__basket__subtitle">По Украине:</div>
                    <div className="form__radiobtn">
                      <input type="radio" value="1" name="nameradio" checked />
                      Самовывоз - вул. Большая Васильковская 14(м. Льва
                      Толстого)
                    </div>
                    <div className="form__radiobtn">
                      <input type="radio" value="1" name="nameradio" checked />
                      Новая Почта
                    </div>
                  </div>
                  <div className="form__delivery__item">
                    <div className="form__basket__subtitle">
                      Международная доставка:
                    </div>
                    <div className="form__radiobtn">
                      <input type="radio" value="1" name="nameradio" checked />
                      Международная доставка:
                    </div>
                    <div className="form__radiobtn">
                      <input type="radio" value="1" name="nameradio" checked />
                      DHL / 3-7 дней / 60$
                    </div>
                  </div>
                </div>
              </div>
              <div className="form__basket__info">
                <div className="form__basket__subtitle">
                  Персональные данные:
                </div>
                <input
                  className="form__basket__input__info"
                  type="text"
                  placeholder="Город*"
                />
                <input
                  className="form__basket__input__info"
                  type="text"
                  placeholder="Отделение почты*"
                />
              </div>
              <div className="form__basket__delivery">
                <div className="form__basket__subtitle">Способ доставки:</div>
                <div className="form__delivery__items">
                  <div className="form__delivery__item">
                    <div className="form__radiobtn form__radiobtn__logo">
                      <input
                        className="form__radio__input"
                        type="radio"
                        value="1"
                        name="nameradio2"
                        checked
                      />
                      Полная предоплата через Приват 24
                    </div>
                    <div className="form__radiobtn">
                      <input type="radio" value="1" name="nameradio2" checked />
                      Наложенным платежом в отделении Новой Почты
                    </div>
                  </div>
                  <div className="form__radiobtn form__radiobtn__visa">
                    <input type="radio" value="1" name="nameradio2" checked />
                    Денежным переводом Visa/MasterCard
                  </div>
                </div>
              </div>
              <div className="form__basket__bonus">
                <div className="form__basket__subtitle">
                  Использование бонусного счёта:
                </div>
                <input
                  className="form__basket__input__bonus"
                  type="text"
                  placeholder="Сумма списания бонусов*"
                />
              </div>
            </form>
            <div className="basket__pay">
              <NavLink to='/Login' className="backet__pay__login">
                Войти в личный кабинет
              </NavLink>
              <div className="basket__pay__menu">
                <NavLink to='/Payment' >УСЛОВИЯ ДОСТАВКИ</NavLink>
                <NavLink to='/Return' >УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</NavLink>
                <div>ИНФОРМАЦИЯ ОБ ОПЛАТЕ</div>
              </div>
              <div className="basket__pay__items">
                <div className="basket__pay__item">
                  <div className="basket__pay__name">ДОСТАВКА:</div>
                  <div className="basket__pay__number">По тарифам перевозчика</div>
                </div>
                <div className="basket__pay__item">
                  <div className="basket__pay__name">БОНУСЫ:</div>
                  <div className="basket__pay__number">-69 грн</div>
                </div>
                <div className="basket__pay__item">
                  <div className="basket__pay__name">ИТОГО:</div>
                  <div className="basket__pay__number">15250 грн</div>
                </div>
              </div>
              <div className="basket__pay__btn" href="#">
                ОФОРМИТЬ ЗАКАЗ
              </div>
              <div className="basket__konf">
                Нажимая на кнопку «оплатить заказ»
                <div>
                  , я принимаю условия публичной оферты и политики
                  конфиденциальности
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBasket;
