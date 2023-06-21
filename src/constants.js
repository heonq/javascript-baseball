const GAME_MESSAGE = {
    START : "숫자 야구 게임을 시작합니다.",
    INPUT : "숫자를 입력해주세요 : ",
    RESTART : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
}

const GAME_RESULT = {
    BALL : {
        0 : "낫싱",
        1 : "1볼",
        2 : "2볼",
        3 : "3볼"
    },

    STRIKE : {
        0 : "",
        1 : "1스트라이크",
        2 : "2스트라이크",
        3 : "3스트라이크",
    },

    CORRECT : "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
}

const ERROR_MESSAGE = {
    THREE_DIGITS : "세자리의 숫자를 입력해주세요.",
    DUPLICATED : "각 자리가 중복되지 않은 숫자를 입력해주세요.",
    NOTANUMBER : "문자가 아닌 숫자를 입력해주세요.",
    INCLUDEZERO : "0이 포함되지 않은 숫자를 입력해주세요.",
}

module.exports = {GAME_MESSAGE,ERROR_MESSAGE,GAME_RESULT}