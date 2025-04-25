import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home2 from "./pages/Home2";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetail from './pages/RecipeDetail';


const App = () => {
  return (
    <Router>
     
      <Routes>
        
        <Route path="/" element={<Home2 />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      

      </Routes>
    </Router>
   
  );
};

export default App;
