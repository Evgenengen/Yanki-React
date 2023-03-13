import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const CatalogList = ({catalogProduct}) => {
  const dispatch = useDispatch();
  const addLike = (id) => {
    dispatch({ type: "ADD_LIKE", payload: id });
  };
  const listItem = catalogProduct.map((item) => {
    const cssClass = item.active ? "form__active form__like " : "form__like";
    return (
      <div className="form__item" key={item.id}>
        <div className="form__label__link">
          <img className="form__label__img" src={item.img} alt="img" />
        </div>
        <button onClick={() => addLike(item.id)} className={cssClass}>
          <img className="form__like__img" src="images/like-3.svg" alt="Like" />
        </button>
        <div className="form__label__title">
          <NavLink to="/CreamCout" className="form__label__title__link">
            {item.title}
          </NavLink>
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
  return <div className="form__items">{listItem}</div>;
};
export default CatalogList;
