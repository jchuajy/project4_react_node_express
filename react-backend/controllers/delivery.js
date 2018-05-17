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

const createNewDelivery = (db) => {
      return (request, response) => {
            console.log("controller hit")
            db.deliveryDB.createNewDelivery(request.body, (error, queryResult) => {
                  if (queryResult.rowCount >= 1) {
                        response.json({message: "Order created!"});
                  } else {
                        response.json({message: "There was a problem with creating your delivery. Please try again!"})
                  }
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
      createNewDelivery
      // goToLogin,
      // logoutUser
}