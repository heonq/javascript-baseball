const Game = require("./Game.js");

class App {
  constructor(){
    this.game = new Game();
  }

  play() {
    this.game.play();
  }
  
}

const app = new App();
app.play();

module.exports = App;
