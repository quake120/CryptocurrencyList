const WebSocket = require("ws");

const API_KEY = "NN4LD10DGZQNSRF2LRHL";
var conn = new WebSocket("wss://stream.cryptowat.ch/connect?apikey=" + API_KEY);

conn.on("message", (msg) => {
  const d = JSON.parse(msg.toString());

  if (
    d.authenticationResult &&
    d.authenticationResult.status === "AUTHENTICATED"
  ) {
    console.log("Connected");
    subscribe(conn, ["assets:62:ohlc"]);
  }
  setInterval(() => {
    console.log(d.marketUpdate);
  }, 1000);
});

const subscribe = (conn, resources) => {
  conn.send(
    JSON.stringify({
      subscribe: {
        subscriptions: resources.map((resource) => {
          return { streamSubscription: { resource: resource } };
        }),
      },
    })
  );
};
