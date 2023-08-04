const OutputView = require('./OutputView');
const MESSAGE = require('../utils/Message');

class Controller {
  play() {
    OutputView.printMessage(MESSAGE.start);
  }
}

module.exports = Controller;
