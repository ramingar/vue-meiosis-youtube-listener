const state = {
    playing      : {},
    showPlayer   : false,
    showInfo     : false,
    activeElement: {},
    results      : []
};

const actions = update => {
    const togglePlayer = show => update({showPlayer: show});
    const showInfo     = show => update({showInfo: show});
    const setResults   = results => update({results: results});
    const setActive    = element => update({activeElement: element});
    const setPlaying   = element => update({playing: element});

    return {togglePlayer, showInfo, setResults, setActive, setPlaying}
};

const store = {
    state,
    actions
};

export {store}