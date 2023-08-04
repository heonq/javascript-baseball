const PREFIX = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  threeDigits: `${PREFIX}세자리의 숫자를 입력해주세요.`,
  digitInRange: `${PREFIX}각 자리 수가 1에서 9까지인 숫자를입력해 주세요.`,
  duplicated: `${PREFIX}서로 중복되지 않은 세자리의 숫자를 입력해주세요.`,
});

module.exports = ERROR_MESSAGE;
