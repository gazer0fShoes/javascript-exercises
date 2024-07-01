const fibonacci = function(number) {
    let n = Number(number)
    if (typeof n != "number" || n < 0) return "OOPS"
    if (n === 0) return n;

    let fibonacci = [1, 1];
    for (let i = 0; i < n - 2; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i + 1])
    }
    return fibonacci[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
