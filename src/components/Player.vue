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
                            <v-list-tile-title>My favorite song</v-list-tile-title>
                            <v-list-tile-sub-title>Fitz & The Trantrums</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-spacer></v-spacer>

                        <v-list-tile-action>
                            <v-btn icon>
                                <v-icon>fast_rewind</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                        <v-list-tile-action :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
                            <v-btn icon>
                                <v-icon>pause</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                        <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                            <v-btn icon>
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
    import {state} from '../meiosis'

    export default {
        name    : 'Player',
        data() {
            return {
                reactivity: state   // make state reactive in vue template
            }
        },
        computed: {
            showPlayer: () => state.showPlayer
        },
        watch   : {
            showPlayer: () => document.querySelector('#show-player').click()
        }
    }
</script>
