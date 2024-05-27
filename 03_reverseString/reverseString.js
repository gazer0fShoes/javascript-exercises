const reverseString = function(inputString) {
    let outputString = "";
    const stringLength = inputString.length;

    for (let i = 0; i < stringLength; i++) {
        outputString += inputString.slice(stringLength - 1 - i, stringLength - i);
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
