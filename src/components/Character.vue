<template>

    <div class="card" style="width: 18rem;">
        <img :src="imageSrc">
        <div class="card-body">
            <h5 class="card-title">{{data.name}}</h5>
            <p class="card-text">{{data.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: Object,
                require: true
            }
        },
        data() {
            return {
                imageSize: 'portrait_uncanny'
            }
        },
        computed: {
            imageSrc() {
                return `${this.data.thumbnail.path}/${this.imageSize}.${this.data.thumbnail.extension}`
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>