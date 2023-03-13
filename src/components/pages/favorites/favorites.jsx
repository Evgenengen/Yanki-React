import Footer from "../footer/Footer";
import React from "react";
import FavoriteItem from "./favorites.item/FavoriteItem";
import BreadCrumbs from "./bread-crumbs/BreadCrumbs";
import './favorites.css'
import HeaderTop from "../header-nav/headertop/HeaderTop";
const Favorites = () => {
  return (
    <div>
      <HeaderTop />
      <main className="main">
        <BreadCrumbs />
        <section className="farotites">
          <div className="container">
            <h4 className="farotites__title">Избранное</h4>
            <FavoriteItem />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
