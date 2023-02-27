import React from "react"
import { useDispatch } from "react-redux"

const ProductItem = () => {
    const dispatch = useDispatch()

  const productAddBasket = () => {
    const title = document.querySelector('.product__description__title').innerText
    const size = document.querySelector('.dropdown__btn').value
      dispatch({type: 'ADD_PRODUCT_BASKET', payload: {title, size}})
  }
    return ( <div className="product__item">
    <div className="product__photo">
      <img
        className="product__img  product__img__w"
        src="images/product-1.jpg"
        alt="фото"
      />
      <img
        className="product__img product__img__wm"
        src="images/product-6.jpg"
        alt="фото"
      />
      <img
        className="product__img product__img__w"
        src="images/product-3.jpg"
        alt="фото"
      />
      <img
        className="product__img product__img__w"
        src="images/product-4.jpg"
        alt="фото"
      />
      <img
        className="product__img product__img__w"
        src="images/product-5.jpg"
        alt="фото"
      />
      <img
        className="product__img product__img__w"
        src="images/product-2.jpg"
        alt="фото"
      />
    </div>
    <div className="product__description">
      <h4 className="product__description__title">Синее пальто</h4>
      <p className="form__label__sum">2900 грн</p>
      <ul className="product__color">
        <li
          className="product__color__style   product__color__style__white"
          data-tab="tab-1"
        ></li>
        <li
          className="product__color__style  product__color__style__blue"
          data-tab="tab-2"
        ></li>
        <li
          className="product__color__style product__circle product__color__style__beige "
          data-tab="tab-3"
        ></li>
      </ul>
      <div className="dropdown">
        <select className="dropdown__btn">
          <option value='XXS' className="dropdown__list__item">XXS</option>
          <option value='XS' className="dropdown__list__item">XS</option>
          <option value='S' className="dropdown__list__item">S</option>
          <option value='M' className="dropdown__list__item">M</option>
          <option value='L' className="dropdown__list__item">L</option>
        </select>
      </div>
      <div
        className="product__text hidden"
        data-tab-content
      >
        Цвет: Белый
      </div>
      <div
        className="product__text hidden"
        data-tab-content
      >
        Цвет: Синий
      </div>
      <div className="product__text" data-tab-content id="tab-3">
        Цвет: Кофе с молоком меланж
      </div>
      <form className="product__form">
        <div onClick={e => productAddBasket()}
          data-cart
          className="product__form__input"
          
        >
          В КОРЗИНУ
        </div>
      </form>
      <div className="product__description__subtitle">
        Подробности
      </div>
      <div className="product__description__info">
        Обмеры и описание
      </div>
      <div className="product__description__compound">
        <button className="product__description__compound__title">
          {" "}
          Выберите размер
        </button>
        <ul className="product__compound__list ">
          <li className="product__compound__item">
            Состав: 50% Шерсть, 50% Полиэстер
          </li>
          <li className="product__compound__item">
            Подкладка: 100% Полиэстер
          </li>
          <li className="product__compound__item">
            Утеплитель: 90% Пух, 10% Перо
          </li>
          <li className="product__compound__item">- Не стирать</li>
          <li className="product__compound__item">
            - Гладить при температуре утюга до 110°C
          </li>
          <li className="product__compound__item">- Не отбеливать</li>
          <li className="product__compound__item">
            - Сухая чистка (химчистка)
          </li>
          <li className="product__compound__item">
            - Барабанная сушка запрещена
          </li>
        </ul>
      </div>
    </div>
  </div> );
}
 
export default ProductItem;
