<template>
    <div class="col-12">
        <pagination :total="total" :selected-page="page" :items-per-page="itemsPerPage"></pagination>
        <div class="row">
            <div
                v-for="item in items"
                :key="item.id"
                class="col">
                    <character :data="item"></character>
            </div>
        </div>
        <pagination :total="total" :selected-page="page" :items-per-page="itemsPerPage"></pagination>
    </div>
</template>

<script>
    import Pagination from './../components/Pagination'
    import Character from './../components/Character'
    import {mapActions, mapState, mapMutations} from 'vuex'
    export default {
        components: {
            Pagination,
            Character
        },
        computed: mapState({
            items: state => state.character.characters,
            total: state => state.character.total,
            page: state => state.pagination.page,
            itemsPerPage: state => state.pagination.itemsPerPage
        }),
        mounted() {
            const {page, itemsPerPage} = this.$route.params;
            this.setPagination({page, itemsPerPage});
            this.loadCharacters();
        },
        beforeRouteUpdate(to, from, next) {
            const {page, itemsPerPage} = to.params;
            this.setPagination({page, itemsPerPage});
            this.loadCharacters();
            next();
        },
        methods: {
            ...mapActions({
                loadCharacters: 'character/getCharacters'
            }),
            ...mapMutations({
                setPagination: 'pagination/SET_PAGINATION'
            })
        }
    }
</script>