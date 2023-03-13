const SectionReturn = () => {
    return (  
        <section className="return">
        <div className="container">
          <h4 className="return__title">Обмен и возврат</h4>
          <p className="return__text">
            Если вам не подошел заказ, мы с удовольствием вам его обменяем или
            примем возврат
          </p>
          <h5 className="return__subtitle">
            Обмен и возврат возможен в случае :
          </h5>
          <ul className="return__list">
            <li className="return__item">
              <img
                className="return__item__img"
                src="images/return-1.svg"
                alt="img"
              />
              <div className="return__item__text">
                если заказ не был использован и сохранил товарный вид(в том
                числе не нарушены бирки, ярлыки, упаковочные материалы)
              </div>
            </li>
            <li className="return__item">
              <img
                className="return__item__img"
                src="images/return-2.svg"
                alt="img"
              />
              <div className="return__item__text">
                возврат и обмен осуществляется в течение двух дней с момента
                получения заказа
              </div>
            </li>
            <li className="return__item">
              <img
                className="return__item__img"
                src="images/return-3.svg"
                alt="img"
              />
              <div className="return__item__text">
                возврат и обмен товара возможен только при отправке по Украине
              </div>
            </li>
            <li className="return__item">
              <img
                className="return__item__img"
                src="images/return-4.svg"
                alt="img"
              />
              <div className="return__item__text">
                бланк возврата присутствует в каждой посылке{" "}
              </div>
            </li>
            <li className="return__item">
              <img
                className="return__item__img"
                src="images/return-5.svg"
                alt="img"
              />
              <div className="return__item__text">
                все расходы по обмену и возврату товара несет покупатель
              </div>
            </li>
            <li className="return__item">
              <img
                className="return__item__img"
                src="images/return-6.svg"
                alt="return"
              />
              <div className="return__item__text">
                после получения возврата мы делаем перевод денежных средств на
                карту клиента
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
}
 
export default SectionReturn;