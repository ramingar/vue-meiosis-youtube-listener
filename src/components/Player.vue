<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-bottom-sheet inset hide-overlay persistent>
            <template v-slot:activator>
                <v-btn id="show-player" style="display: none">Show player</v-btn>
            </template>
            <v-card tile>
                <v-progress-linear :value="progressCurrent" class="my-0"
                                   :height="progressBarHeight"
                                   @mouseover="progressBarHeight=15"
                                   @mouseleave="progressBarHeight=3"></v-progress-linear>

                <v-list>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>{{formatText((playing.snippet || {}).title)}}</v-list-tile-title>
                            <v-list-tile-sub-title>
                                {{formatText((playing.snippet || {}).channelTitle)}}
                            </v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-spacer></v-spacer>

                        <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                                            @click="() => previousAvailable ? previousSong() : undefined">
                            <v-btn icon :disabled="!previousAvailable">
                                <v-icon>fast_rewind</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                        <v-list-tile-action v-if="!currentlyPlaying" :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                                            @click="playVideo">
                            <v-btn icon>
                                <v-icon>play_arrow</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                        <v-list-tile-action v-if="currentlyPlaying" :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                                            @click="pauseVideo">
                            <v-btn icon>
                                <v-icon>pause</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                        <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                                            @click="() => {hidePlayer(); hideInfo(); stopVideo(); clearPlaying()}">
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
        <youtube :video-id="videoId" ref="youtube"
                 :player-vars="playerVars"
                 @playing="toggleCurrentlyPlaying(true)"
                 @paused="toggleCurrentlyPlaying(false)"
                 @ended="toggleCurrentlyPlaying(false)"
                 style="display:none;"/>
    </div>
</template>

<script>
    import {state, actions} from '../meiosis'
    import {ellipsis} from '../helpers/strings'
    import {currentIndex} from '../helpers/player'
    import {infoVideo} from '../api-youtube'
    import moment from 'moment'

    export default {
        name    : 'Player',
        data() {
            return {
                reactivity               : state,   // make state reactive in vue template
                playerVars               : {
                    autoplay: 1
                },
                currentlyPlaying         : false,
                progressBarHeight        : 3,
                progressCountTotalSeconds: 0,
                progressCurrent          : 0,
                intervalId               : 0
            }
        },
        computed: {
            showPlayer       : () => state.showPlayer,
            activeElement    : () => state.activeElement,
            playing          : () => state.playing,
            playingDetails   : () => state.playingDetails,
            nextAvailable    : () => currentIndex(state.results)(state.playing) < state.results.length - 1,
            previousAvailable: () => currentIndex(state.results)(state.playing) > 0,
            player() {
                return (this.$refs.youtube || {}).player
            },
            videoId          : () => Object.assign({}, (state.playing.id || {})).videoId || ''
        },
        methods : {
            formatText  : text => [text].filter(val => val).map(ellipsis(80))[0],
            hidePlayer  : () => actions.togglePlayer(false),
            hideInfo    : () => actions.showInfo(false),
            nextSong    : () => actions.setPlaying(
                state.results[currentIndex(state.results)(state.playing) + 1]
            ),
            clearPlaying: () => actions.setPlaying({}),
            previousSong: () => actions.setPlaying(
                state.results[currentIndex(state.results)(state.playing) - 1]
            ),
            toggleCurrentlyPlaying(value) {
                if (value === true) {
                    this.intervalId = setInterval(this.setProgressCurrent, 1000);         // INTERVAL!!!!!
                } else {
                    clearInterval(this.intervalId);                                    // INTERVAL STOPPED!!!!
                }
                this.currentlyPlaying = value;
            },
            stopVideo() {
                this.player.stopVideo()
            },
            playVideo() {
                this.player.playVideo()
            },
            pauseVideo() {
                this.player.pauseVideo()
            },
            countTotalSeconds(videoDuration) {
                const duration = moment.duration(videoDuration);
                return this.progressCountTotalSeconds = duration.hours() * 60 * 60 + duration.minutes() * 60 + duration.seconds()
            },
            setProgressCurrent() {
                this.player
                    .getCurrentTime()
                    .then(currentTime => {
                        return this.progressCurrent = (currentTime || 0) * 100 / this.progressCountTotalSeconds;
                    })
                    .catch(() => 0)
            }
        },
        watch   : {
            showPlayer: () => document.querySelector('#show-player').click(),
            playing() {
                if (state.playing.id) {
                    infoVideo((state.playing.id || '').videoId)
                        .then(({data}) => {
                            actions.setPlayingDetails((data.items || [])[0]);
                            this.countTotalSeconds((((data.items || [])[0] || {}).contentDetails || {}).duration || {});
                        })
                        .catch(() => actions.setPlayingDetails({}))
                }
            }
        }
    }
</script>
