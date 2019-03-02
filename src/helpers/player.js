const currentIndex = arr => current => arr
    .filter(val => val)
    .map(({snippet}) => snippet.title === current.snippet.title && snippet.channelTitle === current.channelTitle ? 1 : 0)
    .indexOf(1);

const nextElement = arr => current => currentIndex(arr)(current) + 1;

export {nextElement}