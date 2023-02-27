import React from "react";

const BreadCrubms = () => {
    return (  
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__item__link" href="#">
                  Главная
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__item__link" href="#">
                  Корзина
                </a>
              </li>
            </ul>
          </div>
        </div>
    );
}
 
export default BreadCrubms;