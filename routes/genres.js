const express = require('express');

const Genre = require('../models/genre');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('genres/index', { title: 'BookedIn || Genres', genres: Genre.all });
});

router.get('/form', function(req, res, next) {
  res.render('genres/form', { title: 'BookedIn || Genres' });
});

router.post('/upsert', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  Genre.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `the genre has been ${createdOrupdated}!`,
  };
  res.redirect(303, "/genres");
});

router.get('/edit', function(req, res, next) {
  let genreIdx = req.query.id
  let genre = Genre.get(genreIdx);
  res.render('genres/form', { title: 'BookedIn || Genres', genre: genre, genreIdx: genreIdx });
});

module.exports = router;

// an issue that is happening is that when i'm editing a genre
// it just says that the genre has been created and not that it has been updated