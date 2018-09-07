const fs = require('fs');
// pull in the file system module
const img = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongegar = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'image/png',
  });
  response.end(img);
};

module.exports.getSpongegar = getSpongegar;
