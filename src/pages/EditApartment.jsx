import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ApartmentForm from "../components/ApartmentForm";

const EditApartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apartments, setApartments] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const storedApartments = JSON.parse(localStorage.getItem("apartments")) || [];
    setApartments(storedApartments);
    const apartment = storedApartments.find(a => a.id === parseInt(id));
    setCurrent(apartment);
  }, [id]);

  const handleEdit = (updatedApartment) => {
    const updated = apartments.map(a => 
      a.id === parseInt(id) ? { ...a, ...updatedApartment } : a
    );
    setApartments(updated);
    localStorage.setItem("apartments", JSON.stringify(updated));
    navigate("/");
  };

  if (!current) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <ApartmentForm onSubmit={handleEdit} initialData={current} />
    </>
  );
};

export default EditApartment;
