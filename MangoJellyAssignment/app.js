const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const comicBookRoutes = require('./routes/comicBookRoutes');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/comicbooks', comicBookRoutes);

// Error Handling
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
