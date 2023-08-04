const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../../utils/Message');

const InputView = {
  readNumber(handleNumber) {
    Console.readLine(MESSAGE.askInput, handleNumber);
  },
  readRestart(handleRestart) {
    Console.readLine(MESSAGE.askRestart, handleRestart);
  },
};

module.exports = InputView;
