import Footer from "../footer/Footer";
import BreadCrubms from "./bread-crumbs/BreadCrumbs";
import ProductItem from "./product-item/ProductItem";
import './cream-cout.css'
import HeaderTop from "../header-nav/headertop/HeaderTop";

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
      </main>
      <Footer />
    </div>
  );
};

export default CreamCout;
