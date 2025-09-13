import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/apartmentForm.css";

export default function ApartmentForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    price: initialData.price || "",
    year: initialData.year || "",
    category: initialData.category || "Închiriere",
    image: initialData.image || "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    navigate("/");
  };

  return (
    <form className="apartment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Titlu"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Pret"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="year"
        placeholder="An constructie"
        value={formData.year}
        onChange={handleChange}
        required
      />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="Închiriere">Inchiriere</option>
        <option value="Vânzare">Vanzare</option>
      </select>

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
      />

      {formData.image && <img src={formData.image} alt="Preview" />}
      <br />
      <button type="submit">Salveaza</button>
    </form>
  );
}
