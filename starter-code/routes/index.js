const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/', (req, res) => {
  Celebrity.find({})
    .then(celebrities => {
      console.log(celebrities)
      res.render('./celebrities/index', { celebrities })
    })
    .catch(err => {
      console.error('Error while finding the celebrities', err)
      res.render('index');
    })
})


module.exports = router;
