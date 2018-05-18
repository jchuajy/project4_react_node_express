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
    app.get('/deliveries', delivery.getAllDeliveries(db));
    };