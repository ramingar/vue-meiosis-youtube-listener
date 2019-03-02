<template>
    <v-card elevation="0">
        <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-container fill-height fluid>
                <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                        <span class="headline">My favorite info song</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-img>
        <v-card-title>
            <div class="text-xs-center">
                <span class="grey--text">My favorite info song</span><br>
                <span>This is the owner's name</span><br>
                <span>Some extra info to add </span>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn flat color="orange" @click="hideInfoPanel">Hide</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {actions} from '../meiosis'

    export default {
        name   : 'ResultsInfo',
        data   : () => ({
            expand: false
        }),
        methods: {
            hideInfoPanel: () => actions.showInfo(false)
        }
    }
</script>