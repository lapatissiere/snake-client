const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    IP, PORT
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server"); // code that does something when the connection is first established
    conn.write("Name: NFP");

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 80);
    //   let count = 0;
    //   const Move = setInterval(() => {
    //     count++;
    //     conn.write("Move: up");
    //     if (count === 10) {
    //       clearInterval(Move);
    //     }
    //   }, 50);
  });

  conn.on(
    "data",
    (key) => {
      console.log("Server says: ", key);
    } // code that does something when the connection is first established
  );

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
