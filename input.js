// Stores the active TCP connection object.
let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};
//const setupInput = function () {

const handleUserInput = function (key) {
  // process.stdin.on("data", (key) => {
  //   //if key = w, conosle.log move up; if key = a, console.log move left; if key = s, console.log move down; if key = d, console.log move right
  //   process.stdout.write(key);
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "z") {
    connection.write("Say: Hey! Where do you think you're going?!");
  }
  if (key === "x") {
    connection.write("Say: Keep running, slytherin!");
  }
  if (key === "c") {
    connection.write("Say: No one's gonna catch me!");
  }
};

module.exports = { setupInput };
