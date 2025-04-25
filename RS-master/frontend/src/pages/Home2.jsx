import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home2() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src="logo.png" alt="Logo" width="80" height="60" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="#showrecipes">
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

      <div className="container mt-5" id="showrecipes">
        <h2 className="text-center mb-4 fst-italic">Recipes</h2>
        <div className="row">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="col-md-4 mb-4">
              <div className="card h-100 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{recipe.recipeName}</h5>
                  <div className="mt-auto d-flex justify-content-between">
                    <Link to={`/recipe/${recipe._id}`} className="btn btn-dark">
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home2;
