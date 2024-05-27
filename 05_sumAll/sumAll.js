const sumAll = function(num1, num2) {
    let sum = 0;

    if (typeof(num1) != "number" || typeof(num2) != "number" || num1 < 0 || num2 < 0) return "ERROR";

    if (num1 < num2) {
        while (num1 <= num2) {
            sum += num1;
            num1++;
        }
    }
    else {
        while (num2 <= num1) {
            sum += num2;
            num2++;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
