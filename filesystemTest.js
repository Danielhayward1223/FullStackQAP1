/*
The File System module on node allows developers to access the file ssystem of their device. This allows for accessing various files efficiently.
*/

// Including the File System module from node:
var fs = require("fs");

// readFile will read the specified file and return it as data.
// The first argument is the file path, the second argument is the format of the data, and the third is the function that is called.
fs.readFile("./test.txt", "utf8", function (err, data) {
  // if an error occurs it will be thrown.
  if (err) throw err;
  // Printing the data to the console.
  console.log(data);
});

// file system works well with http to display a certain html file as a response to a client.
var http = require("http");

// creating the http server instance.
http
  .createServer(function (req, res) {
    // using file system to load the test.html file and use it as a response to the client.
    fs.readFile("./test.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
