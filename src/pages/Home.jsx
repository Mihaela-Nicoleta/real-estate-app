import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ApartmentCard from "../components/ApartmentCard";
import ApartmentFilters from "../components/ApartmentFilters"; // import
import initialApartments from "../data/apartments";
import "../css/home.css";


const Home = () => {
  const [apartments, setApartments] = useState([]);
  const [filters, setFilters] = useState({
    category: "Toate",
    maxPrice: "",
    year: "",
  });
  const [sortPrice, setSortPrice] = useState("");

  useEffect(() => {
    const storedApartments = JSON.parse(localStorage.getItem("apartments"));
    if (storedApartments && storedApartments.length > 0) {
      setApartments(storedApartments);
    } else {
      setApartments(initialApartments);
      localStorage.setItem("apartments", JSON.stringify(initialApartments));
    }
  }, []);

  const handleDelete = (id) => {
    const updated = apartments.filter((a) => a.id !== id);
    setApartments(updated);
    localStorage.setItem("apartments", JSON.stringify(updated));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSortChange = (e) => {
    setSortPrice(e.target.value);
  };

  const filteredApartments = apartments
    .filter(
      (a) => filters.category === "Toate" || a.category === filters.category
    )
    .filter((a) => !filters.maxPrice || a.price <= parseInt(filters.maxPrice))
    .filter((a) => !filters.year || a.year <= parseInt(filters.year));

  const sortedApartments = [...filteredApartments].sort((a, b) => {
    if (sortPrice === "asc") return a.price - b.price;
    if (sortPrice === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <Navbar />
      <ApartmentFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        sortPrice={sortPrice}
        onSortChange={handleSortChange}
        maxPriceValue={200000}
      />

      <div className="container">
        {sortedApartments.length > 0 ? (
          sortedApartments.map((apartment) => (
            <ApartmentCard
              key={apartment.id}
              apartment={apartment}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="no-apartments">Nu exista apartamente disponibile.</p>
        )}
      </div>
    </>
  );
};

export default Home;
