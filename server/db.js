const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: '1414',
    host: 'localhost',
    port: 5432,
    database: 'mr_swensens_class'
});

module.exports = pool;