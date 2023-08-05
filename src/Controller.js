const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const MESSAGE = require('../utils/Message');
const Validator = require('../utils/Validator');
const BaseballGame = require('./BaseballGame');
const { Console } = require('@woowacourse/mission-utils');
const CONSTANTS = require('../utils/Constants');

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
    this.#baseballGame.countBallAndStrike(numbers);
    this.handleResult();
  }
  handleResult() {
    OutputView.printResult(this.#baseballGame);
    if (this.#baseballGame.checkWinning()) {
      OutputView.printMessage(MESSAGE.win);
      return InputView.readRestart(this.handleRestart.bind(this));
    }
    this.readNumber();
  }
  handleRestart(command) {
    Validator.validateCommand(command);
    +command === CONSTANTS.restart ? this.play() : Console.close();
  }
}

module.exports = Controller;
