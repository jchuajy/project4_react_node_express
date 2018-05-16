/**
 * User controller functions.
 *
 * Each user-related route in `routes.js` will call
 * one controller function here.
 *
 * Export all functions as a module using `module.exports`,
 * to be imported (using `require(...)`) in `routes.js`.
 */


//require jwt file
const jwt = require('jsonwebtoken');


/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

const createNewUser = (db) => {
      return (request, response) => {
            // use user model method "createNewUser" to create new user entry in db
            db.userDB.createNewUser(request.body, (error, queryResult) => {
                  // queryResult of creation is not useful to us, so we ignore it
                  // (console log it to see for yourself)
                  // (you can choose to omit it completely from the function parameters)

                  if (error) {

                        //console log the error to the server
                        console.error('error creating user:', error);
                        //respond with a json indicating error
                        response.json({createdUser: false,
                                    message: "There was an error creating your username. Please try again."});
                  } else if (queryResult == "Email already exists") {
                        
                        response.json({createdUser: false,
                                    message: "This email already exists. Please try a different email."})
                  } else if (queryResult.rowCount >= 1) {
                        
                        // respond with a json indicating success and token
                        jwt.sign({user: queryResult[0]}, 'secretkey', (err, token) => {
                              response.json({
                                    token: token,
                                    createdUser: true,
                                    message: "Account created successfully!"
                              });
                        });
                        
                  // catch all in case anything goes wrong
                  } else {
                        
                        //respond with a json indicating failure
                        response.json({createdUser: false,
                                    message: "There was an error creating your username. Please try again."});
                  }

            });
      };
};

const loginUser = (db) => {
      return (request, response) => {
            //use user model method "findLogin" to check if user information is stored on db
            db.userDB.findLogin(request.body, (error, queryResult, emailCheck, passwordCheck, userType, userName, userId) => {
                  //error logs
                  if (error) {
                        console.log("loginError")
                        //consolelog the error to the server
                        console.error('error logging in:', error);
                        // send a json with an error warning
                        response.json({loginSuccess: false,
                                    message: "There was an error logging you in. Please try again."
                                    });
                  }
                  //if emailCheck fails
                  if (emailCheck === false) {
                        console.log("loginemail")
                        //send a json that email does not exist
                        response.json({loginSuccess: false,
                                    message: "The email you have specified does not exist. Please try again."
                                    });

                        //if passwordCheck fails
                  } else if (passwordCheck === false) {
                        console.log("loginpassword")
                        // send a json that password is wrong
                        response.json({loginSuccess: false,
                                    message: "You have entered an incorrect password. Please try again."
                                    });
                  } else {
                        //if both check passes
                        console.log("controller check pass")
                        console.log(queryResult.rows[0])
                        // respond with a json containing token and login information
                        jwt.sign({user: queryResult.rows[0].email}, 'secretkey', (err, token) => {
                              response.json({
                                    token: token,
                                    name: queryResult.rows[0].name,
                                    email: queryResult.rows[0].email,
                                    loginSuccess: true,
                                    message: "Login Successful!"
                              });
                        });
                  };
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
      createNewUser,
      // goToLogin,
      loginUser //,
      // logoutUser
}