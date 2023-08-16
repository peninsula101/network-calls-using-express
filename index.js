const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log(response);
  response.send("Hello World!");
});

app.get("/date", (first, next) => {
  let date = new Date();
  next.send(`Today's date is ${date}`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
