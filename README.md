# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

## [play.js](play.js)
Establishes connection to the server.

## [input.js](input.js)
Handles all the logic related to setting up input stream and handling user input.

 Key | Command                          
-----|----------------------------------
 W | sends move up command
 A | sends move left command
 S | sends move down command
 D | sends move right command
 Z | sends canned message 'Hey! Where do you think you're going?!'
 X | sends canned message 'Keep running, slytherin!'
 C | sends canned message 'No one's gonna catch me!'

## [client.js](client.js)
Establishes connection to the server- assumes `localhost`.
Prints "Connected to server..." upon successful connection.
Sets the snake-name to "NFP" upon successful connection.
Logs server responses to screen.

## Supported commands

Commands are passed as 'utf8' strings between [client]() and [server](https://github.com/lighthouse-labs/snake-client).
"Name: NFP"
  * Sets the name for snake; `NFP` is the desired name here.
  * Recommended maximum length of name is 3 characters.
"Move: up"
  * Moves the snake one block up, (unless facing down)
"Move: down"
  * Moves the snake one block down, (unless facing up)
"Move: left"
  * Moves the snake one block left, (unless facing right)
"Move: right"
  * Moves the snake one block right, (unless facing left)
"Say: Hey! Where do you think you're going?!"
  * Short chat message to be displayed on the screen; in this case "Hey! Where do you think you're going?!"
 "Say: Keep running, slytherin!"
  * Short chat message to be displayed on the screen; in this case "Keep running, slytherin!"
 "Say: No one's gonna catch me!"
  * Short chat message to be displayed on the screen; in this case "No one's gonna catch me!"
