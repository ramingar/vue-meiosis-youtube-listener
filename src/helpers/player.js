const currentIndex = arr => current => arr
    .filter(val => val)
    .map(({snippet}) =>
        snippet.title === (current.snippet || {}).title
        && snippet.channelTitle === (current.snippet || {}).channelTitle ? 1 : 0)
    .indexOf(1);

export {currentIndex}