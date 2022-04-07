const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser());
app.use(cors());

const { getAllCryptos, getOneCoinData, getTop250 } = require("./cryptoapi");

app.get("/api/v1/allCoins", async (req, res) => {
  var data = await getAllCryptos();
  res.send(data.data);
});

app.get("/api/v1/oneCoin/:coinId", async (req, res) => {
  var data = await getOneCoinData(req.params.coinId);
  res.send(data.data);
});

app.get("/api/v1/top250", async (req, res) => {
  var data = await getTop250();
  res.send(await data.data);
});

app.listen(5000, () => {
  console.log("Listening on 5000...");
});
