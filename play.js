const connect = require("./client");

// establishes a connection with the game server
console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function () {
    process.stdin.on("data", (key) => {
      //   if (key === '\u0003') {
      //     process.exit();
      //   }
      //   process.stdout.write(key);
      // });
      // console.log(after callback);
    });
    process.on("SIGINT", () => {
      process.exit();
    });

    stdin.on("data", handleUserInput);
    return stdin;
  };
};
