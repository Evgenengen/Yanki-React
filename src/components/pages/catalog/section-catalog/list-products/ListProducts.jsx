import React from "react";
const ListProducts = () => {
  const catalogList = [
    "New",
    "Bestsellers",
    "Шубы",
    "Тренчи",
    "Пальто",
    "Пуховики и жилеты",
    "Костюмы",
    "Жакеты",
    "Платья",
    "Рубашки и блузы",
    "Юбки",
    "Summer",
    "Sale",
    "Аксессуары",
  ];
  const List = catalogList.map((item) => {
    return (
      <li key={item} className="catalog__list__item">
        <div className="catalog__list__link">{item}</div>
      </li>
    );
  });
  return <ul className="catalog__list">{List}</ul>;
};

export default ListProducts;
