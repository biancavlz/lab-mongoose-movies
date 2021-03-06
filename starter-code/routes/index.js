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
      next(); //middleware, executes the next code
      // res.render('index');
  })
})

router.get('/celebrities/new', (req, res) => {
  res.render('./celebrities/celebrity-new');
});

router.post('/celebrities/new', (req, res) => {
  const { name, occupation, catchPhrase} = req.body;

  Celebrity.create({ name, occupation, catchPhrase})
    .then(() => {
      console.log('Celebrity successfully created');
      res.redirect('/celebrities/');
    })
    .catch(err => {
      console.error('Error while creating celebrity', err);
  });
});

//this route should be at the end, in otherwise will change the behaviour
// due to the :celebrityId
router.get('/celebrities/:celebrityId', (req, res) => {
  const _id = req.params.celebrityId;
  Celebrity.findOne({ _id })
    .then(celebrity => {
      console.log(celebrity)
      res.render('./celebrities/celebrity-show', { celebrity });
    })
    .catch(err => {
      console.error('Error while retrieving celebrity with id ' + _id, err);
      next()
  });
});

router.post('/celebrities/:celebrityId/delete', (req, res, next) => {
  const celebrityId = req.params.celebrityId;
  Celebrity.findOneAndDelete({ _id: celebrityId })
    .then(celebrity => {
      console.log(celebrity)
      res.redirect('/celebrities/');
    })
    .catch(err => {
      console.error('Error while retrieving celebrity with id ' + celebrityId, err);
      next()
  });
})

module.exports = router;
