/**
 * User controller functions.
 *
 * Each user-related route in `routes.js` will call
 * one controller function here.
 *
 * Export all functions as a module using `module.exports`,
 * to be imported (using `require(...)`) in `routes.js`.
 */


//require db config file


/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

const createNewUser = (db) => {
      return (request, response) => {
            console.log(request)
            // use user model method "createNewUser" to create new user entry in db
            db.userDB.createNewUser(request.body, (error, queryResult) => {
                  // queryResult of creation is not useful to us, so we ignore it
                  // (console log it to see for yourself)
                  // (you can choose to omit it completely from the function parameters)

                  if (error) {
                        console.error('error creating user:', error);
                        response.sendStatus(500);
                  }

                  if (queryResult.rowCount >= 1) {
                        console.log('User created successfully');

                        // drop cookies to indicate user's logged in status and username
                        response.cookie('loggedIn', true);
                        response.cookie('username', queryResult.rows[0].name);
                        response.cookie("userId", queryResult.rows[0].id);
                        response.cookie("userType", queryResult.rows[0].usertype);
                  } else {
                        console.log('User could not be created');
                  }

                  //respond with something
                  response.send("done")
            });
      };
};


/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */

module.exports = {
      // newUserForm,
      createNewUser //,
      // goToLogin,
      // loginUser,
      // logoutUser
}