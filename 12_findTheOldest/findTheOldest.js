const findTheOldest = function(array) {
    return array.sort((a, b) => {
        if (!a.yearOfDeath) return ((b.yearOfDeath - b.yearOfBirth) - (new Date().getFullYear() - a.yearOfBirth));
        else if (!b.yearOfDeath) return ((new Date().getFullYear() - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;