import React from "react";
import { useDispatch } from "react-redux";

const BasketItem = ({ products }) => {
  const dispatch = useDispatch()
  const itemList = products.map((item) => {
    const deleteProductBasket = (title) => {
      dispatch({ type: "DELETE_PRODUCT_BASKET", payload: { title } });
    };
    const countDec = (title) => {
      dispatch({ type: "COUNT_DEC", payload: { title } });
    };
    const countInc = (title) => {
      dispatch({ type: "COUNT_INC", payload: { title } });
    };
    return (
      <div key={item.id} className="basket__item">
        <div className="basket__item__content">
          <div className="basket__item__img">
            <img
              className="basket__img"
              src="images/basket-1.jpg"
              alt="Cream"
            />
          </div>
          <div className="basket__item__title">
            <span>арт. 1589956</span>
            <div className="delete__product">{item.title}</div>
          </div>
        </div>
        <div className="basket__item__line">
          <div className="basket__item__color basket__item__color__blue"></div>
          <div className="basket__size">{item.sizeBasket}</div>
          <div className="basket__item__number">
            <div
              onClick={() => countInc(item.title)}
              className="basket__item__minus"
            >
              -
            </div>
            <div className="basket__item__current">{item.count}</div>
            <div
              onClick={() => countDec(item.title)}
              className="basket__item__plus"
            >
              +
            </div>
          </div>
        </div>
        <div className="basket__item__price">
          <div className="basket__item__counter">
            <div className="price__basket"> {item.count * item.price}</div>
            <div>грн</div> 
          </div>
          <img
            onClick={() => deleteProductBasket(item.title)}
            className="basket__cart__img"
            src="images/cart.svg"
            alt="basket"
          />
        </div>
      </div>
    );
  });
  return <div className="basket__items">{itemList}</div>;
};

export default BasketItem;
