import React from "react";
import Footer from "../footer/Footer";
import SectionCategories from "./section-categories/SectionCategories";
import SectionSubscription from "./section-subscription/SectionSubscription";
import './home.css'
import HeaderTopHome from "../header-nav/headertopHome/HeaderTopHome";

const Home = () => {
  return (
    <div className="wrapper">
      <HeaderTopHome />
      <main className="main">
        <SectionCategories />
        <SectionSubscription />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
