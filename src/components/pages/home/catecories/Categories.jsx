import React from "react";

const Categories = () => {
  let sliders = [
    {
      img: "images/categories-1.jpg",
      id: 1,
      title: "Куртки",
      isActive: false,
    },
    {
      img: "images/categories-2.jpg",
      id: 2,
      title: "Пальто",
      isActive: true,
    },
    {
      img: "images/categories-3.jpg",
      id: 3,
      title: "Шубы",
      isActive: true,
    },
  ];
  return sliders.map((slider) => {
    return (
      <div key={slider.id} className="categories__item">
        <img className='categories__item__img' src={slider.img} alt={slider.title} />
        <p className="categories__item__text">{slider.title}</p>
      </div>
    );
  });
};

export default Categories;
