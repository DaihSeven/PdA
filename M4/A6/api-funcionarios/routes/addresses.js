const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Listar todos os endereços
router.get('/', (req, res) => {
    db.all('SELECT * FROM addresses', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

module.exports = router;