var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//改写
const users=[];
router.route('/')
	.get(function(req,res,next){
		res.json(users);
	})
	.post((req,res) => {
		const user = req.body;
		console.log(user);
		users.push(user);
		res.json(user);
	});

module.exports = router;
