const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

// Get all elements in DB

// Get one element by id

// Get one element by name

// Add element

// Get all elements in a specific group


app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));