<template>
    <div>
        <v-bottom-sheet inset hide-overlay persistent>
            <template v-slot:activator>
                <v-btn id="show-player" style="display: none">Show player</v-btn>
            </template>
            <v-card tile>
                <v-progress-linear :value="50" class="my-0" height="3"></v-progress-linear>

                <v-list>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>{{formatText((activeElement.snippet || {}).title)}}</v-list-tile-title>
                            <v-list-tile-sub-title>
                                {{formatText((activeElement.snippet || {}).channelTitle)}}
                            </v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-spacer></v-spacer>

                        <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                                            @click="() => previousAvailable ? previousSong() : undefined">
                            <v-btn icon :disabled="!previousAvailable">
                                <v-icon>fast_rewind</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                        <v-list-tile-action v-if="true" :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                            <v-btn icon>
                                <v-icon>play_arrow</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                        <v-list-tile-action v-if="false" :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                            <v-btn icon>
                                <v-icon>pause</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                        <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                                            @click="() => {hidePlayer(); hideInfo()}">
                            <v-btn icon>
                                <v-icon>stop</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                        <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                                            @click="() => nextAvailable ? nextSong() : undefined">
                            <v-btn icon :disabled="!nextAvailable">
                                <v-icon>fast_forward</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-bottom-sheet>
    </div>
</template>

<script>
    import {state, actions} from '../meiosis'
    import {ellipsis} from '../helpers/strings'
    import {currentIndex} from '../helpers/player'

    export default {
        name    : 'Player',
        data() {
            return {
                reactivity: state   // make state reactive in vue template
            }
        },
        computed: {
            showPlayer       : () => state.showPlayer,
            activeElement    : () => state.activeElement,
            nextAvailable    : () => currentIndex(state.results)(state.activeElement) < state.results.length - 1,
            previousAvailable: () => currentIndex(state.results)(state.activeElement) > 0
        },
        methods : {
            formatText  : text => [text].filter(val => val).map(ellipsis(80))[0],
            hidePlayer  : () => actions.togglePlayer(false),
            hideInfo    : () => actions.showInfo(false),
            nextSong    : () => actions.setActive(
                state.results[currentIndex(state.results)(state.activeElement) + 1]
            ),
            previousSong: () => actions.setActive(
                state.results[currentIndex(state.results)(state.activeElement) - 1]
            )
        },
        watch   : {
            showPlayer: () => document.querySelector('#show-player').click()
        }
    }
</script>
