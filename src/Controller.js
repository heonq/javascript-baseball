const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const MESSAGE = require('../utils/Message');
const Validator = require('../utils/Validator');

class Controller {
  play() {
    OutputView.printMessage(MESSAGE.start);
    this.readNumber();
  }
  readNumber() {
    InputView.readNumber(this.handleNumbers.bind(this));
  }
  handleNumbers(numbers) {
    Validator.validateNumber(numbers);
    OutputView.printMessage(numbers);
  }
}

module.exports = Controller;
