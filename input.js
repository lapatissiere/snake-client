const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function () {
    process.stdin.on("data", (key) => {
      process.stdout.write(key);
    });
  };
  process.on("SIGINT", () => {
    process.exit();
  });

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
