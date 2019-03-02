<template>
    <v-list two-line>
        <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">
                {{ item.header }}
            </v-subheader>

            <v-divider :inset="item.inset"></v-divider>

            <v-list-tile v-if="item.title" :key="item.title" avatar @click="">
                <v-list-tile-avatar>
                    <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content @click="showInfoPanel">
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </template>
    </v-list>
</template>

<script>
    import {actions} from '../meiosis'

    export default {
        name      : 'ResultsList',
        data() {
            return {
                items     : [
                    {header: 'Results!!'},
                    {
                        avatar  : 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                        title   : 'Brunch this weekend?',
                        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
                    },
                    {
                        avatar  : 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                        title   : 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
                    },
                    {
                        avatar  : 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                        title   : 'Oui oui',
                        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
                    },

                ]
            }
        },
        methods   : {
            showInfoPanel: () => actions.showInfo(true)
        }
    }
</script>