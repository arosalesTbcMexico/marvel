<template>
    <div id="app" class="container-fluid">
        <main class="row">
            <router-view></router-view>
        </main>
        <loader></loader>
    </div>
</template>

<script>
    import Loader from './components/Loader'
    export default {
        name: 'App',
        components: {
            Loader
        },
        async mounted() {

        },
        methods: {

        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
