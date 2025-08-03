const http = require("http");

const express = require("express");

const PORT_NUMBER = 3000;
const app = express();

// Ass a Middleware, next is a function
app.use((req, res, next) => {
  console.log("In Middleware");
  next();
});

// Will not be executed until next() from previous Middleware
app.use((req, res, next) => {
  console.log("In Another Middleware");
});

const server = http.createServer(app);
server.listen(PORT_NUMBER);
