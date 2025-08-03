const http = require("http");

const express = require("express");

const PORT_NUMBER = 3000;
const app = express();

// Add a Middleware, next is a function
// app.use((req, res, next) => {
//   console.log("In Middleware");
//   next(); //  Allows the request to continue to next Middleware
// });

// Will not be executed until next() from previous Middleware
app.use("/add-product", (req, res, next) => {
  console.log("In Another Middleware");
  //   We need not to write headers, attached a body of type any
  res.send("<h1>Add Product page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In Another Middleware");
  res.send("<h1>Hello from Express!!</h1>");
});

app.listen(PORT_NUMBER);
