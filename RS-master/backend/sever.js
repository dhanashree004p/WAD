// const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Recipe = require('./models/Recipe');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// MongoDB connection
mongoose.connect('mongodb+srv://Dhanashree:<password>@cluster0.uptm1fc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/recipes', async (req, res) => {
  try {
    const { name, ingredients, steps, notes } = req.body;

    const recipe = new Recipe({ name, ingredients, steps, notes });
    await recipe.save();

    res.status(201).json(recipe);
  } catch (error) {
    console.error('Error saving recipe:', error);
    res.status(500).json({ message: 'Error saving recipe' });
  }
});

app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
