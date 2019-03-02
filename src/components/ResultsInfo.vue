<template>
    <v-card elevation="0" width="20rem">
        <v-img class="white--text" height="200px" :src="imageSrc">
            <v-container fill-height fluid>
                <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                        <span class="headline">{{(activeElement.snippet || {}).title}}</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-img>
        <v-card-title>
            <div class="text-xs-center">
                <span class="grey--text">{{(activeElement.snippet || {}).title}}</span><br>
                <span>{{(activeElement.snippet || {}).channelTitle}}</span><br>
                <span>{{(activeElement.snippet || {}).description}}</span>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn flat color="orange" @click="hideInfoPanel">Hide</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {actions, state} from '../meiosis'

    export default {
        name    : 'ResultsInfo',
        data    : () => ({
            reactivity: state
        }),
        computed: {
            activeElement: () => state.activeElement,
            imageSrc     : () => ((((state.activeElement || {}).snippet || {}).thumbnails || {}).medium || {}).url
        },
        methods : {
            hideInfoPanel: () => actions.showInfo(false)
        }
    }
</script>