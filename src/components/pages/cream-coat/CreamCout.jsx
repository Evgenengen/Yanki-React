import Footer from "../footer/Footer";
import HeaderTop from "../headertop/HeaderTop";
import BreadCrubms from "./bread-crumbs/BreadCrumbs";
import ProductItem from "./product-item/ProductItem";
import SectionWatched from "./section-watched/SectionWatched";
import './cream-cout.css'

const CreamCout = () => {
  return (
    <div>
      <HeaderTop />
      <main className="main">
        <BreadCrubms />
        <div className="product">
          <div className="container">
            <ProductItem />
          </div>
        </div>
        <SectionWatched />
      </main>
      <Footer />
    </div>
  );
};

export default CreamCout;
