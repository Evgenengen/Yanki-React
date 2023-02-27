import React from "react";
const BreadCrumbs = () => {
    return ( 
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__item__link" href="index.html">
                  Главная
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__item__link" href="#">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
     );
}
 
export default BreadCrumbs;