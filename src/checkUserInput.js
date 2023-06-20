const {ERROR_MESSAGE} = require("./constants");

const checkUserInput=(input)=>{
    if(input.length !== 3) throw new Error(ERROR_MESSAGE.THREE_DIGITS);

    if(new Set(input).size !== 3) throw new Error(ERROR_MESSAGE.DUPLICATED);

    if(isNaN(Number(input))) throw new Error(ERROR_MESSAGE.NOTANUMBER);

    if(input.includes("0")) throw new Error(ERROR_MESSAGE.INCLUDEZERO);
}

module.exports = checkUserInput;