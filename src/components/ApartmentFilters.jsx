import React from "react";
import "../css/apartmentFilters.css";

export default function ApartmentFilters({
  filters,
  onFilterChange,
  sortPrice,
  onSortChange,
  maxPriceValue,
}) {
  return (
    <div className="filters-container">
      <select
        name="category"
        value={filters.category}
        onChange={onFilterChange}
      >
        <option value="Toate">Toate tipurile</option>
        <option value="Inchiriere">Inchiriere</option>
        <option value="Vanzare">Vanzare</option>
      </select>

      <div className="range-container">
        <label>Pret maxim: {filters.maxPrice || maxPriceValue}</label>
        <input
          type="range"
          name="maxPrice"
          min="0"
          max={maxPriceValue}
          value={filters.maxPrice || maxPriceValue}
          onChange={onFilterChange}
        />
      </div>

      <div className="range-container">
        <label>An constructie: {filters.year || "Toti"}</label>
        <input
          type="range"
          name="year"
          min="2000"
          max={new Date().getFullYear()}
          value={filters.year || 0}
          onChange={onFilterChange}
        />
      </div>

      <select value={sortPrice} onChange={onSortChange}>
        <option value="">Sortare pret</option>
        <option value="asc">Crescator</option>
        <option value="desc">Descrescator</option>
      </select>
    </div>
  );
}
