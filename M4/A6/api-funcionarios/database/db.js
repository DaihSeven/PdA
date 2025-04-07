const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./funcionarios.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
});

// Criar tabelas se não existirem
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS employees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        position TEXT,
        salary REAL,
        department TEXT
    )`);
    
    db.run(`CREATE TABLE IF NOT EXISTS addresses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        employee_id INTEGER,
        street TEXT,
        city TEXT,
        state TEXT,
        zip TEXT,
        FOREIGN KEY(employee_id) REFERENCES employees(id)
    )`);
});

module.exports = db;