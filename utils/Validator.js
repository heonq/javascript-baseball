const ERROR_MESSAGE = require('./ErrorMessage');
const CONSTANTS = require('./Constants');

const Validator = {
  validateNumber(number) {
    if (number.length !== CONSTANTS.validLength) throw new Error(ERROR_MESSAGE.threeDigits);
    if (
      [...number].filter((n) => n >= CONSTANTS.minNumber && n <= CONSTANTS.maxNumber).length !==
      CONSTANTS.validLength
    )
      throw new Error(ERROR_MESSAGE.digitInRange);
    if (new Set([...number]).size !== CONSTANTS.validLength)
      throw new Error(ERROR_MESSAGE.duplicated);
  },

  validateCommand(command) {
    if (+command !== CONSTANTS.restart && +command !== CONSTANTS.quit)
      throw new Error(ERROR_message.oneOrTwo);
  },
};

module.exports = Validator;
