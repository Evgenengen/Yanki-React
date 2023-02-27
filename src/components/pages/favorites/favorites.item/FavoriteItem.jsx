import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FavoriteItem = () => {
  const products = useSelector((state) =>
    state.products.products.filter((item) => item.active === true)
  );
  const dispatch = useDispatch();
  const deleteProduct = (id) => {
    dispatch({ type: "DELETE_PRODUCT_FAVORITES", payload: id });
  };
  const itemList = products.map((item) => {
    return (
      <div className="form__item" key={item.id}>
        <div className="form__label__link">
          <img className="form__label__img" src={item.img} alt="" />
        </div>
        <button
          onClick={() => deleteProduct(item.id)}
          className="form__like form__active"
        >
          <img className="form__like__img" src="images/like-3.svg" alt="Like" />
        </button>
        <div className="form__label__title">
          <a className="form__label__title__link" href="cream-coat.html">
            {" "}
            {item.title}
          </a>
        </div>
        <p className="form__label__sum">{item.sum}</p>
        <div className="form__label__size">
          {item.size1} {item.size2} {item.size3} {item.size4} {item.size5}
        </div>
        <div className="form__color">
          <div className="fotm__radio__style fotm__radio__style__white"></div>
          <div className="fotm__radio__style fotm__radio__style__blue"></div>
          <div className="fotm__radio__style fotm__radio__style__beige"></div>
        </div>
      </div>
    );
  });
  return <div className="form__items">{itemList}</div>;
};

export default FavoriteItem;
