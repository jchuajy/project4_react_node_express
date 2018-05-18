/**
 * User model functions.
 *
 * Any time a database SQL query needs to be executed
 * relating to a user (be it C, R, U, D, or Login),
 * one or more of the functions here should be called.
 *
 * NOTE: You can add authentication logic in this model.
 *
 * Export all functions as a module using `module.exports`,
 * to be imported (using `require(...)`) in `db.js`.
 */


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

module.exports = (dbPool) => {
      return {
            
            createNewDelivery: (formInfo, callback) => {
                  
                  //declare queryString
                  let queryString = "SELECT MAX(Id) FROM deliveries";

                  // execute query
                  dbPool.query(queryString, (error, queryResult) => {
                        let deliveryNumber = queryResult.rows[0].max + 1;
                        let queryString2 = "INSERT INTO deliveries (delivery_number, pickup_time, delivery_time, status) VALUES ($1, $2, $3, $4)";
                        let values = [deliveryNumber, formInfo.pickUpTime, formInfo.deliveryTime, "delivery ordered"];

                        dbPool.query(queryString2, values, (error2, queryResult2) => {
                        
                        // invoke callback function with results after query has executed
                        callback(error, queryResult2);
                        })

                        
                  });

            },

            getAllDeliveries: (request, callback) => {
                  
                  //declare queryString
                  let queryString = "SELECT * FROM deliveries";

                  // execute query
                  dbPool.query(queryString, (error, queryResult) => {
      
                        // invoke callback function with results after query has executed
                        callback(error, queryResult);
                  });

            },

            getAllUnassignedDeliveries: (request, callback) => {
                  
                  //declare queryString
                  let queryString = "SELECT * FROM deliveries WHERE assigned_courier IS NULL";

                  // execute query
                  dbPool.query(queryString, (error, queryResult) => {
                        
                        // invoke callback function with results after query has executed
                        callback(error, queryResult);
                  });

            }





      };
};