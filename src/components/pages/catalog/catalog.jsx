import React, { useMemo, useState } from "react";
import Footer from "../footer/Footer";
import BreadCrumbs from "./bread-crumbs/BreadCrumbs";
import SectionCatalog from "./section-catalog/SectionCatalog";
import "./catalog.css";
import HeaderTopCatalog from "./headertopcatalog/HeaderTopCatalog";
import { useSelector } from "react-redux";

const Catalog = () => {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("");
  const catalogList = useSelector((state) => state.products.products);
  const newCatalogList = useMemo(() => {
    return catalogList.filter(
      (item) => {
        return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
      },
      [catalogList, value]
    );
  });
  const catalogProduct = useMemo(() => {
    switch (filter) {
      case "SORT_PRICE_INC":
        return newCatalogList.sort((a, b) => a.price - b.price);
      case "SORT_PRICE_DEC":
        return newCatalogList.sort((a, b) => b.price - a.price);
      case "SORT_PRICE_DEFAULT":
        return newCatalogList.sort((a, b) => a.id - b.id);
      case "SORT_RATING":
        return newCatalogList.sort((a, b) => a.rating - b.rating);
      default:
        return newCatalogList;
    }
  }, [newCatalogList, filter]);

  return (
    <div>
      <HeaderTopCatalog value={value} setValue={setValue} />
      <main className="main">
        <BreadCrumbs />
        <SectionCatalog catalogProduct={catalogProduct} setFilter={setFilter} />
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
