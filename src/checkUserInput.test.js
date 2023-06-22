const checkUserInput = require("./checkUserInput.js");
const {ERROR_MESSAGE} = require("./constants");

describe("입력한 값에 대한 유효성 검사",()=>{
    test("입력한 값이 3자리인지 테스트",()=>{
        const answers = ["1","13","1425"];
        expect(()=>answers.forEach((answer)=>checkUserInput(answer))).toThrow(Error(ERROR_MESSAGE.THREE_DIGITS));
    })
    test("입력한 값이 각 자리마다 중복되지 않은 값인지 테스트",()=>{
        const answers = ["112","133","121"];
        expect(()=>answers.forEach((answer)=>checkUserInput(answer))).toThrow(Error(ERROR_MESSAGE.DUPLICATED));
    })
    test("문자가 포함하지 않은 1-9까지의 숫자를 입력했는지 테스트",()=>{
        const answers = ["abc","!@#","ㄱㄴㄷ"];
        expect(()=>answers.forEach((answer)=>checkUserInput(answer))).toThrow(Error(ERROR_MESSAGE.NOTANUMBER));
    })
  })