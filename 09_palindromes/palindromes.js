const palindromes = function (str) {
    const inputArray = Array.from(str.toLowerCase()).filter(
        letter => (letter >= "a" && letter <= "z") || (letter >= "0" && letter <= "9"));
    if (inputArray.join("") === inputArray.toReversed().join("")) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
