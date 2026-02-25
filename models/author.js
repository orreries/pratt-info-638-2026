const authors = [
    {firstName: "James", lastName: "S. A. Corey"},
    {firstName: "Craig", lastName: "Alanson"},
    {firstName: "Cixin", lastName: "Liu"},
    {firstName: "Toni", lastName: "Morrison"},
    {firstName: "Octavia", lastName: "Butler"},
    {firstName: "Langston", lastName: "Hughes"},
    {firstName: "Lois", lastName: "Lowry"},
    {firstName: "Somebody", lastName: "Someone"},
  ];

exports.add = (author) => {
  authors.push(author);
}

exports.all = authors;
