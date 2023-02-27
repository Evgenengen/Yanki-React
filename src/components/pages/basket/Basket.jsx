import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import HeaderTop from "../headertop/HeaderTop";
import BreadCrubms from "./breadcrumbs/BreadCrubms";
import SectionBasket from "./section-basket/SectionBasket";
import './basket.css'
const Basket = () => {
  const products = useSelector((state) =>
    state.products.products.filter((item) => item.count > 0)
  );
  const dispatch = useDispatch();
  return (
    <div>
      <HeaderTop />
      <main className="main">
        <BreadCrubms />
        <SectionBasket dispatch={dispatch} products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default Basket;
