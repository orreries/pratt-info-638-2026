const books = [
  {title: "Leviathan Wakes", publishingYear: 2011},
  {title: "Caliban’s War", publishingYear: 2012},
  {title: "The Three-Body Problem", publishingYear: 2006},
  {title: "The Bluest Eye", publishingYear: 1970},
  {title: "Kindred", publishingYear: 1979},
  {title: "Montage of a Dream Deferred", publishingYear: 1951}
];

exports.add = (book) => {
  books.push(book);
}

exports.all = books