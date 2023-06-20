const MissionUtils = require("@woowacourse/mission-utils");

const print=(message)=> {
    return MissionUtils.Console.print(message);
}

module.exports = {print};