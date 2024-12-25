const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "123",
    host: "localhost",
    port: 5432,
    database: "postgres",
    connectionTimeoutMillis: 10000 // Increase timeout to 10 seconds
});


async function createTable(){
    await pool.connect();
    await pool.query(`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY ,
        name VARCHAR(100) NOT NULL
        );`) 
        console.log("created successfully");
}

createTable();
module.exports = pool;
