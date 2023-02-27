import React from "react";
import Footer from "../footer/Footer";
import HeaderTopHome from "../headertopHome/HeaderTopHome";
import SectionCategories from "./section-categories/SectionCategories";
import SectionSubscription from "./section-subscription/SectionSubscription";
import './home.css'

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
