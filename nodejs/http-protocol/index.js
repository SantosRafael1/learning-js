//import http
let http = require("http");

//Create a server, it should have a callback function to send and receive data
http.createServer(
    //request and response params
    (req, res  ) => {
        //'end' function send a message
        res.end("Hello World");
    }
).listen(3000); //listen is the port of the server

console.log("Server running...");