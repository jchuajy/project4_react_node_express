


// /* GET users listing. */
// router.get('/new', function(req, res, next) {
// 	// Comment out this line:
//   //res.send('respond with a resource');

//   // And insert something like this instead:
//   res.json([{
//   	id: 1,
//   	username: "samsepi0l"
//   }, {
//   	id: 2,
//   	username: "D0loresH4ze"
//   }]);
// });




module.exports = (app, db) => {
  const users = require('../controllers/user')(db);
  const router = express.Router();

  router.post('/new', users.createNewUser);

}