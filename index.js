const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const db = require('./models/db');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});