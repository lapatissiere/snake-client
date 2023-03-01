const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.141.196',
    port: '50541',
  });
  conn.on("connect", () => {
    console.log("you ded cuz you idled"); // code that does something when the connection is first established
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect