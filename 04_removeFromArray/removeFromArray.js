const removeFromArray = function(array, ...elements) {
    const output = []

    for (a of array) {
        if (elements.includes(a)) continue;
        else output.push(a);
    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
