import React from "react";
const Subscription = () => {
  return (
    <section className="subscription">
      <div className="container">
        <h2 className="subscription__title">Узнайте первым о новинках</h2>
        <form className="form">
          <input
            className="form__input"
            type="text"
            placeholder="Ваш e-mail*"
          />
          <button type="submit" className="form__btn">
            ПОДПИСАТЬСЯ
          </button>
          <div className="subscription__text">
            Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
            персональных данных и ознакомлен(а) с условиями конфиденциальности.
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
