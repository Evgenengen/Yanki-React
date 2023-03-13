import React from "react";
import Basket from "../pages/basket/Basket";
import Catalog from "../pages/catalog/catalog";
import Contacts from "../pages/contacts/contacts";
import CreamCout from "../pages/cream-coat/CreamCout";
import Favorites from "../pages/favorites/favorites";
import Payment from "../pages/payment/Payment";
import Return from "../pages/return/Return";
import Home from "../pages/home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import './media.css'
import Login from "../pages/authorization/login";
import Register from "../pages/authorization/register";
import RegisterFinish from "../pages/authorization/register-finish";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path='/RegisterFinish' element={<RegisterFinish/>}/>
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/CreamCout" element={<CreamCout />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Return" element={<Return />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
