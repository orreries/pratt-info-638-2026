const express = require('express');
const router = express.Router();

const authors = [
    {firstName: "James", lastName: "S. A. Corey"},
    {firstName: "Craig", lastName: "Alanson"},
    {firstName: "Cixin", lastName: "Liu"},
    {firstName: "Toni", lastName: "Morrison"},
    {firstName: "Octavia", lastName: "Butler"},
    {firstName: "Langston", lastName: "Hughes"},
  ]


router.get('/', function(req, res, next) {

  res.render('authors/index', { title: 'BookedIn || Authors', authors: authors });
});

module.exports = router;

