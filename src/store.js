const state = {
    showPlayer: false,
    showInfo  : false
};

const actions = update => {
    const togglePlayer = () => update({showPlayer: !state.showPlayer});
    const showInfo     = show => update({showInfo: show});
    return {togglePlayer, showInfo}
};

const store = {
    state,
    actions
};

export {store}