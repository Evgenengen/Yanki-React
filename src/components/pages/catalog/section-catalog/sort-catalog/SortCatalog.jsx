import React, { useState } from "react";

const SortCatalog = ({ setFilter }) => {
  const [dropdown, setDropdown] = useState(true);
  const styleClass = dropdown
    ? "catalog__features__list hidden"
    : "catalog__features__list";
  let btnSort = [
    { names: "Отменить сортировку", label: "SORT_PRICE_DEFAULT" },
    { names: "Рейтингу", label: "SORT_RATING" },
    { names: "По возрастанию цены", label: "SORT_PRICE_DEC" },
    { names: "По убыванию цены", label: "SORT_PRICE_INC" },
  ];
  const btn = btnSort.map(({ names, label }) => {
    return (
      <li key={label} className="catalog__features__items">
        <button
          onClick={() => setFilter(label)}
          type="button"
          className="catalog__features__links"
        >
          {names}
        </button>
      </li>
    );
  });
  return (
    <ul className="catalog__features">
      <li className="catalog__features__item catalog__features__mr">
        <div
          onClick={() => setDropdown(!dropdown)}
          type="button"
          className="catalog__features__link catalog__features--width "
        >
          Сортировать по
        </div>
        <ul className={styleClass} onClick={() => setDropdown(true)}>
          {btn}
        </ul>
      </li>
    </ul>
  );
};
export default SortCatalog;
