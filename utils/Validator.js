const ERROR_MESSAGE = require('./ErrorMessage');

const Validator = {
  validateNumber(number) {
    if (number.length !== 3) throw new Error(ERROR_MESSAGE.threeDigits);
    if ([...number].filter((n) => n >= 1 && n <= 9).length !== 3)
      throw new Error(ERROR_MESSAGE.digitInRange);
    if (new Set([...number]).size !== 3) throw new Error(ERROR_MESSAGE.duplicated);
  },

  validateCommand(command) {
    if (+command !== 1 && +command !== 2) throw new Error(ERROR_message.oneOrTwo);
  },
};

module.exports = Validator;
