const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pool.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    // console.log('db connect');
  }
});

module.exports = pool;

// const connectionString = 'postgres://hjunlhdhavctjo:1dee3f9ff767e383211235514221724b019b2684a00f75196cff6716857f3481@ec2-54-165-184-219.compute-1.amazonaws.com:5432/d5arene10ff50t'
// const { Pool } = require('pg')
// const pool = new Pool({
//   connectionString: connectionString,
//   ssl: { rejectUnauthorized : false }
// })

// module.exports = pool
