import {P} from "patchinko";
import flyd from "flyd";
import {store} from "./store";

const update  = flyd.stream();
const state   = store.state;
const states  = flyd.scan(P, store.state, update);
const actions = store.actions(update);

export {states, state, actions}