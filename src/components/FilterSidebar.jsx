import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "../styles/filters.css";

const FilterSidebar = () => {
  const [openSection, setOpenSection] = useState("IDEAL FOR");

  const filters = [
    { title: "CUSTOMIZABLE", options: [] },
    { title: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
    { title: "OCCASION", options: ["Casual", "Formal", "Party"] },
    { title: "WORK", options: ["Handcrafted", "Machine made"] },
    { title: "FABRIC", options: ["Cotton", "Silk", "Wool"] },
    { title: "SEGMENT", options: ["Luxury", "Budget"] },
    { title: "SUITABLE FOR", options: ["Summer", "Winter"] },
    { title: "RAW MATERIALS", options: ["Organic", "Synthetic"] },
    { title: "PATTERN", options: ["Printed", "Plain", "Striped"] },
  ];

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <aside className="filter-sidebar">
      <h3 className="filter-header-title">FILTERS</h3>
      <div className="filter-list">
        {filters.map((filter, idx) => (
          <div key={idx} className="filter-item">
            <button
              className="filter-toggle"
              onClick={() => toggleSection(filter.title)}
            >
              <span>{filter.title}</span>
              {openSection === filter.title ? (
                <FiChevronUp className="filter-icon" />
              ) : (
                <FiChevronDown className="filter-icon" />
              )}
            </button>

            {openSection === filter.title && (
              <div className="filter-options">
                {filter.options.length > 0 ? (
                  filter.options.map((option, i) => (
                    <label key={i}>
                      <input type="checkbox" />
                      {option}
                    </label>
                  ))
                ) : (
                  <p className="no-options">No options</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;
