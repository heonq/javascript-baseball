const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const MESSAGE = require('../utils/Message');
const Validator = require('../utils/Validator');
const BaseballGaem = require('./BaseballGame');

class Controller {
  #baseballGame;

  constructor() {
    this.#baseballGame = new BaseballGame();
  }

  play() {
    this.readNumber();
  }
  setUp() {
    OutputView.printMessage(MESSAGE.start);
    this.#baseballGame.generateRandomNumber();
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
