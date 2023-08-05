const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printMessage(message) {
    Console.print(`${message}\n`);
  },
  printResult(baseballGame) {
    this.printMessage(baseballGame.getMessage());
  },
};

module.exports = OutputView;
