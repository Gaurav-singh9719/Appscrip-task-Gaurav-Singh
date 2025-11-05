import React from "react";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/filters.css";
import "./styles/products.css";
import "./styles/footer.css";

import Navbar from "./components/Navbar";
import ProductListing from "./pages/ProductListing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <ProductListing />
      <Footer />
    </>
  );
};

export default App;
