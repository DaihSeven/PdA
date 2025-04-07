const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Listar todos os funcionários
router.get('/', (req, res) => {
    db.all('SELECT * FROM employees', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Listar funcionários por endereço
router.get('/:addressId', (req, res) => {
    const { addressId } = req.params;
    
    db.all(`
        SELECT e.* 
        FROM employees e
        JOIN addresses a ON e.id = a.employee_id
        WHERE a.id = ?
    `, [addressId], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

module.exports = router;