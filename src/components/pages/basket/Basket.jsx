import React from "react";
import { useSelector } from "react-redux";
import Footer from "../footer/Footer";
import BreadCrubms from "./breadcrumbs/BreadCrubms";
import SectionBasket from "./section-basket/SectionBasket";
import "./basket.css";
import HeaderTop from "../header-nav/headertop/HeaderTop";
const Basket = () => {
  const products = useSelector((state) =>
    state.products.products.filter((item) => item.count > 0)
  );
  return (
    <div>
      <HeaderTop />
      <main className="main">
        <BreadCrubms />
        <SectionBasket products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default Basket;
