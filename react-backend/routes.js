/**
 * Routes file.
 *
 * All routes you want to match in the app should appear here.
 * Upon match, a corresponding controller method should be called.
 *
 * Export as a function using `module.exports`,
 * to be imported (using `require(...)`) in `index.js`.
 */

const users = require('./controllers/user')


module.exports = (app, db) => {
   
      /*
       *  =========================================
       *  Users
       *  =========================================
       */
      // CRUD users
      app.post('/users/new', users.createNewUser(db));
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
    

    };