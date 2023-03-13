import React from "react";

const FormBasket = () => {
    return ( 
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
  </form> );

}
 
export default FormBasket;
