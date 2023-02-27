import Footer from "../footer/Footer";
import HeaderTop from "../headertop/HeaderTop";
import BreadCrumbs from "./bread-crumbs/BreadCrumbs";
import SectionContacts from "./section-contacts/SectionContacts";
import Subscription from "./subscription/Subscription";
import './contacts.css'

const Contacts = () => {
  return (
    <div>
      <HeaderTop />
      <main className="main">
        <BreadCrumbs />
        <SectionContacts />
        <Subscription />
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
