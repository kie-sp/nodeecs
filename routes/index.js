var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello',(req,res) => {
  res.send({
    "data" : "hello"
  })
})

module.exports = router;
