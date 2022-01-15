// DEPENDENCIES
const express = require('express');
const apiRoutes = require('./routes/apiRoute');
const htmlRoutes = require('./routes/htmlRoute');

const app = express();
const PORT = 8001;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(express.json()); // enables you use middlewares

// routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});