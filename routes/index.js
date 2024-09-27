var express = require('express');
var router = express.Router();
var database=require('../database');
const { request } = require('../app');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/LF', function(req, res, next) {
  res.render('L&Fpage');
});

router.post('/LF',async function(req,res)
{
  var nm=req.body.name;
  var id=req.body.id;
  var flc=req.body.f_loc;
  var clc=req.body.c_loc;
  var ig=req.body.img;
  database.query('insert into lostdata(name,id,foundloc,currentloc) values(?,?,?,?)' (nm,id,flc,clc));
})
// // await database.query(
//   "insert into cart set ?",
//   { product_id: productid, user_id: 0 }
// )
module.exports = router;
