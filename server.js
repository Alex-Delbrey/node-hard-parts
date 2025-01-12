const http = require('http');
const fs = require('fs');
const { getEventListeners } = require('events');

function doOnRequest(request, response) {

  // response.end("Welcome to Twitter beta")

  if (request.method === 'GET' && request.url === '/') {
    let fileInfo = fs.readFileSync("index.html", "utf8");
    response.end(fileInfo);
  }
  else if (request.method === 'POST' && request.url === '/sayHi') {
    fs.appendFileSync("hi_log.txt", "Somebody said hi.\n");
    response.end("hi back to you!");
  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    // code here...

  }
  else {
    // Handle 404 error: page not found
    // code here...

  }
}

const server = http.createServer(doOnRequest)

server.listen(3000);
