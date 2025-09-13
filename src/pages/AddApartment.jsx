import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ApartmentForm from "../components/ApartmentForm";
import initialApartments from "../data/apartments";

const AddApartment = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const storedApartments = JSON.parse(localStorage.getItem("apartments"));
    if (storedApartments) setApartments(storedApartments);
    else setApartments(initialApartments);
  }, []);

  const handleAdd = (apartment) => {
    const newApartment = { id: Date.now(), ...apartment };
    const updated = [...apartments, newApartment];
    setApartments(updated);
    localStorage.setItem("apartments", JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <ApartmentForm onSubmit={handleAdd} />
    </>
  );
};

export default AddApartment;
