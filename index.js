const express = require("express");
const fs = require("fs");
const cartRouter = require("./cartRouter");
const app = express();

app.use(express.json());
app.use("/", express.static("./public"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});