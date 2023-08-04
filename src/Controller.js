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
    this.setUp();
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
    this.#baseballGame.compareWithUser(numbers);
    this.handleResult();
  }
  handleResult() {
    OutputView.printResult(this.#baseballGame);
    if (this.#baseballGame.getStrike() === 3) {
      OutputView.printMessage(MESSAGE.win);
      return InputView.readRestart(this.handleRestart.bind(this));
    }
  }
  handleRestart() {}
}

module.exports = Controller;
