const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect('mongodb://localhost/starter-code');

Celebrity.collection.drop(); //to restart the bd

const celebrities = [
  {
    name: 'Beyonce',
    occupation: 'singer',
    catchPhrase: 'I\'m a single lady'
  },
  {
    name: 'Samuel L. Jackson',
    occupation: 'actor',
    catchPhrase: 'lorem ipsum'
  },
  {
    name: 'Jack Nicolson',
    occupation: 'actor',
    catchPhrase: 'lorem ipsum'
  },
  {
    name: 'Angelina Jolie',
    occupation: 'actress',
    catchPhrase: 'lorem ipsum'
  },
  {
    name: 'Meryl Streep',
    occupation: 'actress',
    catchPhrase: 'lorem ipsum'
  },
  {
    name: 'Johnny Depp',
    occupation: 'actor',
    catchPhrase: 'lorem ipsum'
  },
  {
    name: 'Al Pacino',
    occupation: 'actor',
    catchPhrase: 'lorem ipsum'
  },

];

Celebrity.create(celebrities)
  .then(data => {
    console.log(`Created ${data.length} celebrities successfully`);
  })
  .catch(err => {
    console.error('Error while seeding the database', err);
});

// to run the seeds $node bin/seeds.js