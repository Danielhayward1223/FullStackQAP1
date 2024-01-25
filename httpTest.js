/*
The HTTP module in node.js allows you to create HTTP servers that listen to ports and gives responeses based on the request.
A server is created with the "createServer()" method.
*/

// This line includes the HTTP module from node
var http = require("http");

//Creates the server object
function normalServer() {
  http
    .createServer(function (req, res) {
      console.log("Response!");
      // This is the response that the server returns to the client
      res.write("This is a server!");
      // This ends the response
      res.end();
    })
    // this sets up the port that the server will listen on.
    .listen(8080);
}

normalServer();
