const {print} = require("./util.js");
const {GAME_MESSAGE} = require("./constants.js");

class Game {
    play(){
        this.start();
    }
    start(){
        this.printStartMessage();
    }
    printStartMessage() {
    print(GAME_MESSAGE.START);
    }
}

module.exports = Game;