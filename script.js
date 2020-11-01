const express = require('express');
const fs = require("fs");
const cartRouter = require("./src/server/cartRouter");
const app = express();

app.use(express.json());
app.use("/", express.static("./src/public/"));
app.use(`/api/basket`, cartRouter);

app.get('/api/catalog', (req, res) => {
  fs.readFile('./json/catalog.json', 'utf-8', (err, data) => {
      if (err) {
          res.send(JSON.stringify({result: 0, text: err}));
      } else {
          res.send(data);
      }
  });
});

app.get('/api/backet', (req, res) => {
  fs.readFile('./json/backet.json', 'utf-8', (err, data) => {
      if (err) {
          res.send(JSON.stringify({result: 0, text: err}));
      } else {
          res.send(data);
      }
  });
});



app.get((req, res) => {
  if (req.url === "/api/dele") {
    fs.readFile("./src/server/json/basket.json", "utf-8", (err, data) => {
      if (err) {
        res.send(JSON.stringify({ result: 0, text: err }));
      } else {
        res.send(data);
      }
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Подключение к серверу через http://localhost:${port}`)
);