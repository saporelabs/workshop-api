var express = require('express');
var router = express.Router();

var users = new Array();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {
  if (req.body.name === undefined)
  {
    res.sendStatus(401);
    res.send('Faltou o name');
  }
  users.push(req.body);
  res.send();
});

module.exports = router;
