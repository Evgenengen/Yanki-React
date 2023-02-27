import React from "react";
import Footer from "../footer/Footer";
import HeaderTopCatalog from "../headertopcatalog/HeaderTopCatalog";
import BreadCrumbs from "./bread-crumbs/BreadCrumbs";

import SectionCatalog from "./section-catalog/SectionCatalog";
import './catalog.css'
const Catalog = () => {

  return (
    <div>
      <HeaderTopCatalog />
      <main className="main">
        <BreadCrumbs />
        <SectionCatalog />
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
