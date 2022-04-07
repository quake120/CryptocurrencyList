const axios = require("axios");

var api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
});

const getAllCryptos = async () => {
  const res = await api.get("/coins/list");
  return res;
};

const getOneCoinData = async (coinId) => {
  var returnedCoinData = await api.get(`/coins/${coinId}`);
  return returnedCoinData;
};

const getTop250 = async () => {
  var coinData = await api.get(
    `/coins/markets?per_page=250&vs_currency=usd&order=name_desc`
  );
  return coinData;
};

module.exports = {
  getAllCryptos: getAllCryptos,
  getOneCoinData: getOneCoinData,
  getTop250: getTop250,
};
