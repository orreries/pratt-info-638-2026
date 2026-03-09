const express = require('express');
const router = express.Router();

const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');

router.get('/', function(req, res, next) {
  const books = Book.all
  res.render('books/index', { title: 'BookedIn || Books', books: books });
});

router.get('/form', async (req, res, next) => {
  res.render('books/form', { title: 'BookedIn || Books', authors: Author.all });
});

router.get('/form', async (req, res, next) => {
  res.render('books/form', { title: 'BookedIn || Books', genres: Genre.all });
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  Book.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `the book has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/books')
});

router.get('/edit', async (req, res, next) => {
  let bookIndex = req.query.id;
  let book = Book.get(bookIndex);
  res.render('books/form', {
    title: 'BookedIn || Books',
    book: book,
    bookIndex: bookIndex,
    authors: Author.all,
    genres: Genre.all,
  });
});

router.get('/show/:id', async (req, res, next) => {
  var templateVars = {
    title: "BookedIn || show",
    book: Book.get(req.params.id)
  }
  if (templateVars.book.authorIds) {
    templateVars.authors = templateVars.book.authorIds.map((authorId) => Author.get(authorId));
  }
  // got an error here saying that map is not a function
  // i think this is because map() is for arrays and the genre is going to be a singular value for each book
  // currently trying to figure out what could work here for a single value
  if (templateVars.book.genreIds) {
    templateVars.genres = Genre.get(templateVars.book.genreIds); // kinda following the structure from line 48? idk this is my best guess that works
  }
  res.render('books/show', templateVars);
});

module.exports = router;
