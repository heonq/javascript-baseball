const {print,generateRandomNumber} = require("./util.js");
const {GAME_MESSAGE,GAME_RESULT} = require("./constants.js");
const MissionUtils = require("@woowacourse/mission-utils");
const checkUserInput = require("./checkUserInput.js");

class Game {
    
    play(){
        this.start();
        this.setUp();
        this.getUserInput(GAME_MESSAGE.INPUT);
    }

    start(){
        this.printStartMessage();
    }

    setUp(){
        this.correctNumber = generateRandomNumber();
    
    }

    getUserInput(message){
        MissionUtils.Console.readLine(message,(answer)=>{
            this.user = answer;
            checkUserInput(this.user);
            this.getUserInput();
        })
    }
    
    countStrike() {
        return this.correctNumber.filter((number,index)=>{
            return number==this.user[index];
        }).length;
    }
    
    countBall() {
        return this.correctNumber.filter((number,index)=>{
            return number!= this.user[index]&&this.user.includes(number);
        })
    }

    printResult() {
        const strike = countStrike();
        const ball = countBall();
        
        if(strike>0&&ball===0) {
            print(GAME_RESULT.STRIKE[strike])
            if (strike===3){
                print(GAME_RESULT.CORRECT);
            }
            return
        }

        print(`${GAME_RESULT.BALL[ball]} ${GAME_RESULT.STRIKE[strike]}`.trim());
    }

}

module.exports = Game;