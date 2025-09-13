import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/apartmentCard.css";

const ApartmentCard = ({ apartment, onDelete }) => {
  const navigate = useNavigate();

  console.log(apartment.image);

  return (
    <div className="apartment-card">
      <img src={apartment.image} alt={apartment.title} />
      <div className="apartment-card-content">
        <h3>{apartment.title}</h3>
        <p>Preț: ${apartment.price}</p>
        <p>An: {apartment.year}</p>
        <p>Tip: {apartment.category}</p>
      </div>
      <div className="apartment-card-buttons">
        <button
          className="edit-btn"
          onClick={() => navigate(`/edit/${apartment.id}`)}
        >
          Editare
        </button>
        <button className="delete-btn" onClick={() => onDelete(apartment.id)}>
          Stergere
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
