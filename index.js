function highestPossibleHand(hand) {

}

// First, we require the https standard Node module
const http = require('http');

const url = 'http://www.deckofcardsapi.com/api/deck/new/draw/?count=5'

// We then use the get function to access our URL, which has a callback that delivers the response we've stored in the res variable.
callback = function(res) {
  let str = '';

  //another chunk of data has been received, so append it to `str`
  res.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  res.on('end', function () {
    const obj = JSON.parse(str);
    
  });
}

http.request(url, callback).end();
