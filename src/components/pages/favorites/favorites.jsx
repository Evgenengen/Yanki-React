import Footer from "../footer/Footer";
import HeaderTop from "../headertop/HeaderTop";
import React from "react";
import FavoriteItem from "./favorites.item/FavoriteItem";
import BreadCrumbs from "./bread-crumbs/BreadCrumbs";
import './favorites.css'
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
