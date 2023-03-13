import React from "react";
import BasketItem from "../basket-item/BasketItem";
import BasketBottom from "./basket-bottom/BasketBottom";

const SectionBasket = ({ products }) => {
  let price = products.reduce((total, product) => total + product.price*product.count, 0);
 
  return (
    <section className="basket">
      <div className="container">
        <div className="basket__inner">
          <div className="basket__top">
            <h4 className="basket__title">Ваш заказ</h4>
            <BasketItem products={products} />
            <div className="backet__top__sum">
              <div>К оплате:</div>
              <div className="backet__sum__total">{price} грн</div>
            </div>
          </div>
          <BasketBottom />
        </div>
      </div>
    </section>
  );
};

export default SectionBasket;
