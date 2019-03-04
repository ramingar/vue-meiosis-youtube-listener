<template>
    <v-layout row wrap>
        <v-text-field label="Type something to search and press <Enter>..." v-model="term" @keyup.enter="search(term)"/>
    </v-layout>
</template>

<script>
    import {actions} from '../meiosis'
    import {searchVideos} from '../api-youtube'

    export default {
        name   : 'Search',
        data() {
            return {
                term: ''
            }
        },
        methods: {
            search: term => {
                return searchVideos(term)
                    .then(({data}) => {
                        actions.setResults(data.items)
                    })
                    .catch(() => actions.setResults([]))
            }
        }
    }
</script>