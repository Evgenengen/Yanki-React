import { NavLink } from "react-router-dom";
import FormBasket from "./form-basket/FormBasket";

const BasketBottom = () => {
    return ( 
        <div className="basket__bottom">
            <FormBasket />
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
              <div className="basket__pay__btn" >
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
     );
}
 
export default BasketBottom;