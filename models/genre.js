const genres = [
    {genreType: "Drama"},
    {genreType: "SciFi"},
    {genreType: "Horror"},
    {genreType: "Thriller"},
    {genreType: "Children/Young Adult"},
    {genreType: "Poetry"}
  ];

exports.all = genres;
exports.upsert = (genre) => {
  if (genre.id) {
  // the created/updated upsert was giving me issues so i wanted to check the terminal 
  // to see if it was passing through the correct index number (it is)  
  console.log('genre id is:', genre.id); 
    exports.update(genre);
  } else {
    exports.add(genre);
  }
}

exports.add = (genre) => {
  genres.push(genre);
};
exports.update = (genre) => {
  genre.id = parseInt(genre.id);
  genres[genre.id] = genre;
}
exports.get = (idx) => {
  return genres[idx];
}