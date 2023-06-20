const {print,generateRandomNumber} = require("./util.js");
const {GAME_MESSAGE} = require("./constants.js");

class Game {
    
    play(){
        this.start();
        this.setUp();
    }
    start(){
        this.printStartMessage();
    }
    setUp(){
        this.correctNumber = generateRandomNumber();
    }
    

    printStartMessage() {
    print(GAME_MESSAGE.START);
    }
}

module.exports = Game;