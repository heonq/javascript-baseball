const {print,generateRandomNumber} = require("./util.js");
const {GAME_MESSAGE} = require("./constants.js");
const MissionUtils = require("@woowacourse/mission-utils");
const checkUserInput = require("./checkUserInput.js");

class Game {
    
    play(){
        this.start();
        this.setUp();
        this.getUserInput();
    }

    start(){
        this.printStartMessage();
    }

    setUp(){
        this.correctNumber = generateRandomNumber();
    
    }

    getUserInput(){
        MissionUtils.Console.readLine(GAME_MESSAGE.INPUT,(answer)=>{
            this.user = answer;
            checkUserInput(this.user);
            this.getUserInput();
        })
    }
    

    printStartMessage() {
    print(GAME_MESSAGE.START);
    }
}

module.exports = Game;