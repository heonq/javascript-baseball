const {print,generateRandomNumber} = require("./util.js");
const {GAME_MESSAGE,GAME_RESULT,ERROR_MESSAGE} = require("./constants.js");
const MissionUtils = require("@woowacourse/mission-utils");
const checkUserInput = require("./checkUserInput.js");

class Game {
    
    play(){
        this.start();
        this.setUp();
        this.getUserInput(GAME_MESSAGE.INPUT);
    }

    start(){
        print(GAME_MESSAGE.START);
    }

    setUp(){
        this.correctNumber = generateRandomNumber();
    
    }

    getUserInput(message){
        MissionUtils.Console.readLine(message,(answer)=>{
            if(message===GAME_MESSAGE.RESTART){
               return this.replayOrClose(answer);
            }
            this.user = answer;
            MissionUtils.Console.print(this.user);
            checkUserInput(this.user);
            this.printResult();
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
        }).length;
    }

    printResult() {
        const strike = this.countStrike();
        const ball = this.countBall();

        if(strike>0&&ball===0) {
            print(GAME_RESULT.STRIKE[strike])
            
            if (strike===3){
                print(GAME_RESULT.CORRECT);
                return this.getUserInput(GAME_MESSAGE.RESTART);
            }
        }

        print(`${GAME_RESULT.BALL[ball]} ${GAME_RESULT.STRIKE[strike]}`.trim());
    }


    replayOrClose(userInput) {
        if(userInput === "1") {
            return this.play();
        }
        if(userInput=== "2"){
           return MissionUtils.Console.close();
        }

        else throw new Error(ERROR_MESSAGE.RESTARTERROR);
    }
}

module.exports = Game;