import React from "react";
import CatalogList from "../catalog-list/catalogList";
import ListProducts from "./list-products/ListProducts";
import SortCatalog from "./sort-catalog/SortCatalog";

const SectionCatalog = ({ catalogProduct, setFilter }) => {
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__inner">
          <div className="catalog__row">
            <h3 className="catalog__title">Каталог</h3>
            <ListProducts />
          </div>
          <div className="catalog__product">
            <div className="catalog__filter">
              <SortCatalog setFilter={setFilter} />
            </div>
            <CatalogList catalogProduct={catalogProduct} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCatalog;
