/**
 * Routes file.
 *
 * All routes you want to match in the app should appear here.
 * Upon match, a corresponding controller method should be called.
 *
 * Export as a function using `module.exports`,
 * to be imported (using `require(...)`) in `index.js`.
 */

const users = require('./controllers/user');
const delivery = require('./controllers/delivery');

//require jwt file
const jwt = require('jsonwebtoken');

// Token Verification   

function verifyToken(req, res, next) {
    // Get auth header value
    const token = req.cookies.token;

    // Check if bearer is undefined
    if (typeof token !== 'undefined') {

        jwt.verify(token, 'secretkey', function(err, decoded) {
            if (err) {
                // If there is an error decoding
                res.sendStatus(403);
            } else {

                // Next middleware 
                next();
            }
        })

        // // Split at the space
        // const bearer = bearerHeader.split(" ");
        // // Get token from array
        // const bearerToken = bearer[1];
        // // Set the token
        // req.token = bearerToken;


    } else {

        // Forbidden
        res.sendStatus(403);
    }
}

module.exports = (app, db) => {
   
      /*
       *  =========================================
       *  General
       *  =========================================
       */







      /*
       *  =========================================
       *  Users
       *  =========================================
       */
      // CRUD users

      //log in user
      app.post('/users/login', users.loginUser(db));
      app.post('/users/new', users.createNewUser(db));
      app.get('/users/couriers', users.getAllCouriers(db));
      // app.post('/users', users.create);
    
      // // Authentication
      // app.post('/users/logout', users.logout);
      // app.get('/users/login', users.loginForm);
      // app.post('/users/login', users.login);
    
      /*
       *  =========================================
       *  Deliveries
       *  =========================================
       */
    app.get('/deliveries/unassigned', delivery.getAllUnassignedDeliveries(db));
    app.post('/deliveries/new', delivery.createNewDelivery(db));
    app.get('/deliveries', verifyToken, delivery.getAllDeliveries(db));
    };