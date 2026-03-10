const books = [
  {title: "Leviathan Wakes", publishingYear: 2011, authorIds: ["0", "1"], genreIds: ["1"]},
  {title: "Caliban’s War", publishingYear: 2012, genreIds: ["1"]},
  {title: "The Three-Body Problem", publishingYear: 2006, genreIds: ["1"]},
  {title: "The Bluest Eye", publishingYear: 1970, genreIds: ["0"]},
  {title: "Kindred", publishingYear: 1979, genreIds: ["1"]},
  {title: "Montage of a Dream Deferred", publishingYear: 1951, genreIds: ["5"]},
  {title: "The Giver", publishingYear: 1993, genreIds: ["1"]},
  {title: "The Giving Tree", publishingYear: 1964, genreIds: ["4"]}
];

exports.get = (idx) => {
  return books[idx];
}

exports.add = (book) => {
  books.push(book);
}

exports.update = (book) => {
  books[book.id] = book;
}

exports.upsert = (book) => {
  if (book.authorIds && !Array.isArray(book.authorIds)) {
    book.authorIds = [book.authorIds];
  }
  if (book.genreIds && !Array.isArray(book.genreIds)) {
    book.genreIds = [book.genreIds];
  }
  if (book.id) {
    exports.update(book);
  } else {
    exports.add(book);
  }
}
exports.all = books