require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example Route
app.get('/', (req, res) => {
  res.send('Printing Service API is running.');
});

// Import and use your routes (e.g., authentication, profile, orders)
// const userRoutes = require('./routes/users');
// app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
