/**
 * Postgres database configuration.
 *
 * Import models and `pg` package.
 * Initialise configuration object with database credentials.
 * Initialise the connection pool with config object.
 *
 * Export the pool and models as a module using `module.exports`.
 */


const pg = require('pg');
const userDB = require('./models/user');
// const productDB = require('./models/product');
// const orderDB = require("./models/order");

// inside of db.js

//require the url library
//this comes with node, so no need to yarn add
const url = require('url');

//check to see if we have this heroku environment variable
if( process.env.DATABASE_URL ){

  //we need to take apart the url so we can set the appropriate configs

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  //make the configs object
  var configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{

  //otherwise we are on the local network
  var configs = {
      user: 'postgres',
      host: '127.0.0.1',
      database: 'project4',
      port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', (err) => {
  console.log('pg client error', err.message, err.stack);
})

module.exports = {
  pool: pool,
  userDB: userDB(pool) //,
//   productDB: productDB(pool),
//   orderDB: orderDB(pool)
}