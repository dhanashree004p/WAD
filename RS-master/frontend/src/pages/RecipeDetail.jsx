// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function RecipeDetail() {
//   const [recipe, setRecipe] = useState(null);
//   const { id } = useParams();  // Retrieve the recipe ID from the URL

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/recipes/${id}`);
//         setRecipe(response.data);  // Set the recipe data
//       } catch (error) {
//         console.error('Error fetching recipe:', error);
//       }
//     };

//     fetchRecipe();
//   }, [id]);  

//   if (!recipe) {
//     return <div>Loading...</div>;  
//   }

//   return (
//     <>
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container d-flex justify-content-between align-items-center">
//           <Link className="navbar-brand" to="/">
//             <img src="logo.png" alt="Logo" width="80" height="60" />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link active text-dark" aria-current="page" to="/home2">
//                   Show Recipes
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active text-dark" aria-current="page" to="/addrecipe">
//                   Add Recipes
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-dark" to="/">
//                   Log out
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
    
// <div className="container mt-5">
//   <div className="card shadow p-4">
//     <h2
//       className="text-center mb-4"
//       style={{
//         fontStyle: "italic",
//         fontSize: "3rem", 
//         color: "black", 
//         textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
//       }}
//     >
//       {recipe.recipeName}
//     </h2>

//     {recipe.image && (
//       <div className="text-center">
//         <img
//           src={`http://localhost:5000/${recipe.image}`}
//           alt={recipe.recipeName}
//           className="img-thumbnail mb-3"
//           style={{ width: "200px", height: "200px", objectFit: "cover" }}
//         />
//       </div>
//     )}

//     <h3 style={{ color: "black" }}>Ingredients</h3>
//     <ul style={{ color: "black", listStyleType: "disc", paddingLeft: "20px" }}>
//       {recipe.ingredients.split(",").map((ingredient, index) => (
//         <li key={index}>{ingredient.trim()}</li>
//       ))}
//     </ul>

//     <h3 style={{ color: "black" }}>Steps</h3>
//     <p style={{ color: "black" }}>
//       {recipe.steps.split(".").map((step, index) =>
//         step.trim() ? (
//           <span key={index}>
//             • {step.trim()}. <br />
//           </span>
//         ) : null
//       )}
//     </p>

//     {recipe.spiceNote && (
//       <div
//         className="alert mt-3"
//         style={{
//           backgroundColor: "lightgray",
//           color: "black",
//           fontStyle: "italic", 
//         }}
//       >
//         <strong>Spice Note:</strong> {recipe.spiceNote}
//       </div>
//     )}
//   </div>
// </div>



//     </>
//   );
// }

// export default RecipeDetail;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

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
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="card shadow p-4">
          <h2
            className="text-center mb-4"
            style={{
              fontStyle: "italic",
              fontSize: "3rem",
              color: "black",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
            }}
          >
            {recipe.recipeName}
          </h2>

          <h3 style={{ color: "black" }}>Ingredients</h3>
          <ul style={{ color: "black", listStyleType: "disc", paddingLeft: "20px" }}>
            {recipe.ingredients.split(",").map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li>
            ))}
          </ul>

          <h3 style={{ color: "black" }}>Steps</h3>
          <p style={{ color: "black" }}>
            {recipe.steps.split(".").map((step, index) =>
              step.trim() ? (
                <span key={index}>
                  • {step.trim()}. <br />
                </span>
              ) : null
            )}
          </p>

          {recipe.spiceNote && (
            <div className="alert mt-3" style={{ backgroundColor: "lightgray", color: "black", fontStyle: "italic" }}>
              <strong>Spice Note:</strong> {recipe.spiceNote}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
