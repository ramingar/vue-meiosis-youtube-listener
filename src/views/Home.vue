<template>
    <v-container grid-list-md text-xs-center>
        <search/>
        <results/>
        <player/>
    </v-container>
</template>

<script>
    // @ is an alias to /src
    import Search from '@/components/Search.vue'
    import Results from "../components/Results";
    import Player from "../components/Player";

    export default {
        name      : 'Home',
        components: {
            Player,
            Results,
            Search
        }
    }
</script>
