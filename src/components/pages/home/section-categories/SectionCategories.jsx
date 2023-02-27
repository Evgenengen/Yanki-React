import React from "react";
import Categories from "../catecories/Categories";

const SectionCategories = () => {
    return (  
        <section className="categories">
          <div className="container">
            <h2 className="categories__title">Категории</h2>
            <div className="categories__items">
              <Categories />
            </div>
          </div>
        </section>
    );
}
 
export default SectionCategories
