const express = require('express');
const app = express();

require('dotenv').config();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.DATA_SOURCE, sqlite3.OPEN_READWRITE);

app.use(express.json());

// Get all elements in DB
app.get('/elements', (req, res) => {
    const sql = 'SELECT * FROM elements;'

    const params = [];

    db.all(sql, params, (err, rows) => {
        if (err) next(err);
        else res.json(rows);
    })
})

// Get one element by id
app.get('/elements/:id', (req, res, next) => {
    const sql = 'SELECT * FROM elements WHERE id = ?'
    const params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) next(err);
        else res.json(row);
    })
})

// Get one element by name
app.get('/:name', (req, res, next) => {
    const sql = 'SELECT * FROM elements WHERE name = ?'
    const params = [req.params.name]
    db.get(sql, params, (err, row) => {
        if (err) next(err);
        else res.json(row);
    })
})

// Add element
app.post('/elements', (req, res) => {
    const sql = 'INSERT INTO elements (name, atomic_number, abbreviation, element_group) VALUES (?, ?, ?, ?);'
    const { name, atomic_number, abbreviation, element_group } = req.body;
    const params = [name, atomic_number, abbreviation, element_group]
    db.run(sql, params, (err) => {
        if (err) res.json(err);
        else res.json('Element successfully added')
    });
});

// Get all elements in a specific group
app.get('/elementGroup/:group', (req, res, next) => {
    const sql = 'SELECT * FROM elements WHERE element_group = ?'
    const params = [req.params.group];
    db.all(sql, params, (err, rows) => {
        if (err) next(err);
        else res.json(rows);
    })
})


app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));