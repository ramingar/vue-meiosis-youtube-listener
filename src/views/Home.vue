<template>
    <div>
        <search/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Search from '@/components/Search.vue'

    export default {
        name      : 'home',
        components: {
            Search
        }
    }
</script>
