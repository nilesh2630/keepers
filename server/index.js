const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes/todorouter');
const cors = require('cors');

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// Get DB URI from environment variables
const DB = process.env.DB;
if (!DB) {
  console.error('Missing DB environment variable');
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected successfully'))
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
  });

// Routes setup
app.use(routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
