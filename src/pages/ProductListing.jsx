import React, { useState } from "react";
import "../styles/global.css";
import "../styles/navbar.css";
import "../styles/filters.css";
import "../styles/products.css";
import "../styles/footer.css";

import FilterSidebar from "../components/FilterSidebar";
import SortDropdown from "../components/SortDropdown";
import ProductCard from "../components/ProductCard";

const ProductListing = () => {
  const [showFilters, setShowFilters] = useState(true);

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/500/50${i}`,
    title: "PRODUCT NAME",
    brand: "Brand Name",
    price: 999 + i * 20,
  }));

  return (
    <>
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
        {showFilters && (
          <aside className="plp-sidebar">
            <FilterSidebar />
          </aside>
        )}

        <div
          className={`plp-products ${showFilters ? "with-filter" : "full-width"}`}
        >
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
    </>
  );
};

export default ProductListing;
