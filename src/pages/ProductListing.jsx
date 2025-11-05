import React, { useState } from "react";
import "../styles/global.css";
import "../styles/navbar.css";
import "../styles/filters.css";
import "../styles/products.css";
import "../styles/footer.css";

import Navbar from "../components/Navbar";
import FilterSidebar from "../components/FilterSidebar";
import SortDropdown from "../components/SortDropdown";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const ProductListing = () => {
  const [showFilters, setShowFilters] = useState(true);

  // Dummy product data (you can replace with API later)
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/500/50${i}`,
    title: "PRODUCT NAME",
    brand: "Brand Name",
    price: 999 + i * 20,
  }));

  return (
    <>
      <Navbar />

      {/* HEADER SECTION */}
      <section className="plp-header">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet ut elementum dolor.
        </p>
      </section>

      {/* TOOLBAR */}
      <div className="plp-toolbar">
        <div className="toolbar-left">
          <span className="item-count">3425 ITEMS</span>
          <button
            className="toggle-filter"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>
        <div className="toolbar-right">
          <SortDropdown />
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="plp-container">
        {/* FILTER SIDEBAR */}
        {showFilters && (
          <aside className="plp-sidebar">
            <FilterSidebar />
          </aside>
        )}

        {/* PRODUCTS SECTION */}
        <div className={`plp-products ${showFilters ? "with-filter" : "full-width"}`}>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                brand={product.brand}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductListing;
