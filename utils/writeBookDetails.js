const fs = require('fs');

function writeBookDetails(title, author, publisher) {

    const data = `
Title: ${title}
Author: ${author}
Publisher: ${publisher}
`;

    fs.writeFileSync('bookDetails.txt', data);

    console.log('Book details saved successfully');
}

module.exports = writeBookDetails;