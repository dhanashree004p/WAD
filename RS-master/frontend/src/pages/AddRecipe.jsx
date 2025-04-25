import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    recipeName: "",
    ingredients: "",
    steps: "",
    spiceNote: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/recipes", formData);
      alert("Recipe added successfully!");
      setFormData({
        recipeName: "",
        ingredients: "",
        steps: "",
        spiceNote: ""
      });
    } catch (error) {
      alert("Error adding recipe!");
      console.error(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src="logo.png" alt="Logo" width="80" height="60" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="/home2">
                  Show Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="/addrecipe">
                  Add Recipes
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5 signup-container">
        <h2 className="text-center mb-4">Add Recipe</h2>

        <form onSubmit={handleSubmit} className="p-4 border rounded shadow signup-form">
          <div className="mb-3">
            <label className="form-label">Recipe Name</label>
            <input
              type="text"
              name="recipeName"
              className="form-control"
              required
              value={formData.recipeName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Ingredients</label>
            <textarea
              name="ingredients"
              className="form-control"
              required
              value={formData.ingredients}
              onChange={handleChange}
              rows="4"
              placeholder="List the ingredients"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Steps</label>
            <textarea
              name="steps"
              className="form-control"
              required
              value={formData.steps}
              onChange={handleChange}
              rows="4"
              placeholder="Describe the steps"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Spice Note (Optional)</label>
            <textarea
              name="spiceNote"
              className="form-control"
              value={formData.spiceNote}
              onChange={handleChange}
              rows="2"
              placeholder="Any special spice note"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-dark w-100">
            Add Recipe
          </button>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
