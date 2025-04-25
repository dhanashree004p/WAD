// const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  steps: String,
  notes: String,
});

module.exports = mongoose.model('Recipe', recipeSchema);
