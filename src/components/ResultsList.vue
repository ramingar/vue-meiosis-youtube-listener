<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-list two-line>
        <template v-for="(item, key) in items">
            <v-subheader v-if="item.header" :key="item.header">
                {{ items.length > 1 ? 'Results' : item.header }}
            </v-subheader>

            <v-divider :inset="item.inset" :key="`divider-${key}`"></v-divider>

            <v-list-tile v-if="item.snippet" :key="key" avatar @click="setActive(item)">

                <v-list-tile-action @click="() => {showPlayer(); showInfoPanel(); setPlayingSong(item)}">
                    <v-btn icon>
                        <v-icon>play_circle_outline</v-icon>
                    </v-btn>
                </v-list-tile-action>

                <v-list-tile-content @click="showInfoPanel">
                    <v-list-tile-title>
                        <v-tooltip bottom>
                            <template v-slot:activator="{on}">
                                <span v-on="on">{{formatText(item.snippet.title)}}</span>
                            </template>
                            <span>{{item.snippet.title}}</span>
                        </v-tooltip>
                    </v-list-tile-title>
                    <v-list-tile-sub-title>{{formatText(item.snippet.channelTitle)}}</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </template>
    </v-list>
</template>

<script>
    import {actions, state} from '../meiosis'
    import {ellipsis} from '../helpers/strings'

    export default {
        name    : 'ResultsList',
        data() {
            return {
                reactivity: state
            }
        },
        computed: {
            items: () => ([{header: 'Results will appear here'}, ...state.results])
        },
        methods : {
            showInfoPanel : () => actions.showInfo(true),
            showPlayer    : () => actions.togglePlayer(true),
            setActive     : actions.setActive,
            setPlayingSong: actions.setPlaying,
            formatText    : text => [text].filter(val => val).map(ellipsis(70))[0]
        }
    }
</script>