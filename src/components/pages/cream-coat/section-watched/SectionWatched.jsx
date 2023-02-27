import React from "react";
const SectionWatched = () => {
    return ( 
        <section className="watched">
          <div className="container">
            <h4 className="watched__title">Вы недавно смотрели </h4>
            <div className="catalog__product">
              <div className="form__items form__items__look">
                <div className="form__item">
                  <a className="form__label__link" href="#">
                    <img
                      className="form__label__img"
                      src="images/categories-2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="form__label__title">
                    <a className="form__label__title__link" href="#">
                      {" "}
                      Белая куртка <span></span>
                    </a>
                  </div>
                  <p className="form__label__sum">2900 грн</p>
                  <ul className="form__label__size">
                    <li>
                      <a href="#">XXS</a>
                    </li>
                    <li>
                      <a href="#">XXS</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                  <div className="form__color">
                    <div className="fotm__radio__style fotm__radio__style__white"></div>
                    <div className="fotm__radio__style fotm__radio__style__blue"></div>
                    <div className="fotm__radio__style fotm__radio__style__beige"></div>
                  </div>
                </div>
                <div className="form__item">
                  <a className="form__label__link" href="#">
                    <img
                      className="form__label__img"
                      src="images/categories-1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="form__label__title">
                    <a className="form__label__title__link" href="#">
                      {" "}
                      Белая куртка <span>new</span>
                    </a>
                  </div>
                  <p className="form__label__sum">2900 грн</p>
                  <ul className="form__label__size">
                    <li>
                      <a href="#">XXS</a>
                    </li>
                    <li>
                      <a href="#">XXS</a>
                    </li>
                    <li>
                      <a href="#">XS</a>
                    </li>
                    <li>
                      <a href="#">S</a>
                    </li>
                    <li>
                      <a href="#">M</a>
                    </li>
                    <li>
                      <a href="#">L</a>
                    </li>
                  </ul>
                  <div className="form__color">
                    <div className="fotm__radio__style fotm__radio__style__white"></div>
                    <div className="fotm__radio__style fotm__radio__style__blue"></div>
                    <div className="fotm__radio__style fotm__radio__style__beige"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     );
}
 
export default SectionWatched;