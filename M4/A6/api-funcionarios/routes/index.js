const express = require('express');
const router = express.Router();
const employeesRouter = require('./employees');
const addressesRouter = require('./addresses');

// Rota raiz
router.get('/', (req, res) => {
    res.json({ 
        message: 'API de Gerenciamento de Funcionários',
        endpoints: {
            employees: '/employees',
            addresses: '/addresses'
        }
    });
});

// Rotas específicas
router.use('/employees', employeesRouter);
router.use('/addresses', addressesRouter);

module.exports = router;