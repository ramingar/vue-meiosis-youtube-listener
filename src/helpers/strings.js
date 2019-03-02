const trimUpTo = numberOfCharacters => text => text.substr(0, numberOfCharacters);
const ellipsis = numberOfCharacters => text => text.length < (numberOfCharacters - 3)
    ? text
    : `${trimUpTo(numberOfCharacters - 3)(text)}...`;

export {trimUpTo, ellipsis}