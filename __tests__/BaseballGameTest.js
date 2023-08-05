const MissionUtils = require('@woowacourse/mission-utils');
const BaseballGame = require('../src/BaseballGame');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('BaseballGame 테스트', () => {
  test.each([
    ['236', '낫싱'],
    ['137', '1스트라이크'],
    ['154', '2볼 1스트라이크'],
    ['145', '3스트라이크'],
  ])('사용자가 입력한 값에 대한 게임 결과 테스트', (userInput, message) => {
    const Random = [1, 4, 5];
    mockRandoms(Random);
    const baseballGame = new BaseballGame();
    baseballGame.generateRandomNumber();
    baseballGame.countBallAndStrike(userInput);
    expect(baseballGame.getMessage()).toEqual(expect.stringContaining(message));
  });
});
