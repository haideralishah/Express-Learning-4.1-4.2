// var url = require("url");

// var parsedURL = url.parse("http://www.example.com/profile?name=barry"); 
// console.log(parsedURL.protocol); // "http:"
// console.log(parsedURL.host); // "www.example.com"
// console.log(parsedURL.query);
// console.log(parsedURL.path);
// console.log(parsedURL.pathname);











// var http = require('http');

// function handlerFunction(request, response) {
//     console.log("In comes a request to: " + request.url);
//     response.end();
// }
// var server = http.createServer(handlerFunction);
// server.listen(3000)







// var express = require("express");

// // var http = require("http");

// var app = express();

// // function myMiddleWare(request, response) {
// //     console.log('inside middleware');
// //     response.end();
// // }

// // app.use(myMiddleWare);

// app.use(function (request, response, next) {
//     console.log('inside middleware');
//     // response.end();
//     next();
// });


// app.use(function (request, response) {
//     console.log('inside second middleware');
//     // response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Hello, World!");
// });


// app.listen(3000, function () {
//     console.log('Server started on port 3000!');
// });



// http.createServer(app).listen(3000); 
























/* Second Example with middleware*/



// var express = require("express");
// var app = express();
// var logger = require("morgan");
// var path = require('path');
// // app.use(function (request, response, next) {
// //     console.log("In comes a " + request.method + " to " + request.url);
// //     next();
// // });

// app.use(logger("short"));


// app.use(function (request, response, next) {
//     var seconds = new Date().getSeconds();
//     console.log(seconds);
//     if (seconds % 2 === 0) {
//         next();
//     }
//     else {
//         response.statusCode = 403;
//         response.end("Not authorized.");
//     }
// });





// var publicPath = path.resolve(__dirname, "public");


// app.use(express.static(publicPath));




// app.use(function (request, response, next) {

//     response.end('Secret info: the password is "swordfish"!');
// });




// app.listen(3000, function () {
//     console.log('Server started on port 3000!');
// })



















// var express = require("express");
// var logger = require("morgan");
// var path = require('path');


// var app = express();
// var publicPath = path.resolve(__dirname, "public");
// app.use(logger("short"));

// // app.use(express.static(publicPath));

// app.get('/about', function (request, response) {
//     response.end("Welcome to my homepage!");
// })
// app.post('/about', function (request, response) {
//     response.end("Welcome to my homepage! with post method");
// })

// app.use(function (request, response) {
//     response.statusCode = 404;
//     response.end("404!");
// });



// // app.get("/", function (request, response) {
// //     response.end("Welcome to my homepage!");
// // });
// // app.get("/about", function (request, response) {
// //     response.end("Welcome to the about page!");
// // });
// // app.get("/weather", function (request, response) {
// //     response.end("The current weather is NICE.");
// // });
// // app.use(function (request, response) {
// //     response.statusCode = 404;
// //     response.end("404!");
// // });

// app.listen(3000, function () {
//     console.log('Server started on port 3000!');
// })




















var express = require("express");
var logger = require("morgan");
var path = require('path');


var app = express();
var publicPath = path.resolve(__dirname, "public");


app.use(logger("short"));

app.use(express.static(publicPath));

app.get("/", function (request, response) {
    response.end("Welcome to my homepage!");
});

app.get("/about", function (request, response, next) {
    // response.end("Welcome to the about page!");
    next();
});

app.use(function (request, response) {
    console.log('inside 248 line middleware');
    response.end();
})

app.get("/weather", function (request, response) {
    response.end("The current weather is NICE.");
});

app.use(function (request, response) {
    response.statusCode = 404;
    response.end("404!");
});

app.listen(3000, function () {
    console.log('Server started on port 3000!');
})

