const state = {
    showPlayer   : false,
    showInfo     : false,
    activeElement: {},
    results      : []
};

const actions = update => {
    const togglePlayer = show => update({showPlayer: show});
    const showInfo     = show => update({showInfo: show});
    const setResults   = _results => update({results: _results});
    const setActive    = element => update({activeElement: element});

    return {togglePlayer, showInfo, setResults, setActive}
};

const store = {
    state,
    actions
};

export {store}