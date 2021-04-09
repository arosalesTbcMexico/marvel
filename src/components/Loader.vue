<template>
    <div v-show="loading"
        class="fixed-bottom text-end m-3">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: mapState({
            loading: state => state.loader.loading
        })
    }
</script>