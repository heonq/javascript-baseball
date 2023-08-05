const Validator = require('../utils/Validator');
const ERROR_MESSAGE = require('../utils/ErrorMessage');

describe('유효성 검사 테스트', () => {
  test.each([
    [['1', '12', '1234'], ERROR_MESSAGE.threeDigits],
    [['019', '102', '320'], ERROR_MESSAGE.digitInRange],
    [['112', '121', '211'], ERROR_MESSAGE.duplicated],
  ])('사용자가 입력한 값에 대한 유효성 검사', (userInput, errorMessage) => {
    userInput.forEach((input) => {
      expect(() => Validator.validateNumber(input)).toThrow(errorMessage);
    });
  });
  test('사용자가 입력한 게임 재시작 명령어에 대한 유효성 검사', () => {
    const answer = ['3', '일', 'one', '11', '22', '재시작', '종료'];
    expect(() => answer.forEach(Validator.validateCommand)).toThrow(ERROR_MESSAGE.oneOrTwo);
  });
});
