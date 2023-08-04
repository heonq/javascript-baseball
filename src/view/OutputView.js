const { Console } = require('@woowacourse/mission-utils');
const CONSTANTS = require('../../utils/Constants');

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
  printResult(baseballGame) {
    const ball = baseballGame.getBall();
    const strike = baseballGame.getStrike();
    if (strike === 0 && ball === 0) return this.printMessage(CONSTANTS.nothing);
    if (strike === 0) return this.printMessage(ball + CONSTANTS.ball);
    if (ball === 0) return this.printMessage(strike + CONSTANTS.strike);
    this.printMessage(`${ball + CONSTANTS.ball} ${strike + CONSTANTS.strike}`);
  },
};

module.exports = OutputView;
