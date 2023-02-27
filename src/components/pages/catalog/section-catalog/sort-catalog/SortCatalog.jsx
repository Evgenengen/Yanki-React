import React, {  useState } from "react";
import { useDispatch } from "react-redux";

const SortCatalog = () => {
  const [dropdown, setDropdown] = useState(true);
  const dispatch = useDispatch();
  const sortPriceDefault = () => {
    dispatch({ type: "SORT_DEFAULT", payload: "" });
  };
  const sortRating = () => {
    dispatch({ type: "SORT_RATING", payload: "" });
  };
  const sortPriceDec = () => {
    dispatch({ type: "SORT_PRICE_DEC", payload: "" });
  };
  const sortPriceInc = () => {
    dispatch({ type: "SORT_PRICE_INC", payload: "" });
  };
  const openSort = (e) => {
    return (
      setDropdown(!dropdown)
    );
  };
  function closeSort(e) {
    e.stopPropagation()
    return setDropdown(true)
  }
  const styleClass = dropdown
    ? "catalog__features__list hidden"
    : "catalog__features__list";
  return (
    <ul className="catalog__features">
      <li className="catalog__features__item catalog__features__mr">
        <div
          onClick={openSort}
          type="button"
          className="catalog__features__link catalog__features--width "
        >
       Сортировать по
        </div>
        <ul className={styleClass} onClick={closeSort}>
          <li className="catalog__features__items">
            <button
              onClick={(e) => sortPriceDefault(e)}
              type="button"
              className="catalog__features__links"
            >
              Отменить сортировку
            </button>
          </li>
          <li className="catalog__features__items">
            <button
              onClick={(e) => sortRating(e)}
              type="button"
              className="catalog__features__links"
            >
              Рейтингу
            </button>
          </li>
          <li className="catalog__features__items">
            <button
              onClick={(e) => sortPriceDec(e)}
              type="button"
              className="catalog__features__links"
            >
              По возрастанию цены{" "}
            </button>
          </li>
          <li className="catalog__features__items">
            <button
              onClick={(e) => sortPriceInc(e)}
              type="button"
              className="catalog__features__links"
            >
              По убыванию цены
            </button>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default SortCatalog;


