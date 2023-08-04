const InputView = require('./view/InputView');
const OutputView = require('./OutputView');
const MESSAGE = require('../utils/Message');

class Controller {
  play() {
    OutputView.printMessage(MESSAGE.start);
    this.readNumber();
  }
  readNumber() {
    InputView.readNumber(this.handleNumbers.bind(this));
  }
  handleNumbers(numbers) {}
}

module.exports = Controller;
