<template>
    <v-layout row justify-space-around>
        <v-flex xs12>
            <results-list/>
        </v-flex>
        <v-flex shrink>
            <v-expand-x-transition>
                <div v-show="infoPanel" style="position: fixed; right: 0;">
                    <results-info/>
                </div>
            </v-expand-x-transition>
        </v-flex>
    </v-layout>
</template>

<script>
    import ResultsInfo from "./ResultsInfo";
    import {state} from '../meiosis'
    import ResultsList from "./ResultsList";

    export default {
        components: {
            ResultsList,
            ResultsInfo
        },
        name      : 'Results',
        data() {
            return {
                reactivity: state,
            }
        },
        computed  : {
            infoPanel: () => state.showInfo
        }
    }
</script>