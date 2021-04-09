<template>
    <nav aria-label="Page navigation" class="text-end">
        <span class="disabled">Filas por página:</span>
        <div class="col-2 d-inline-flex px-2">
        <select
            v-model="itemsPerPageAux"
            @change="onChangeItemsPerPage"
            class="form-select">
            <option 
                v-for="item in itemsPerPageArray"
                :key="item.value"
                :value="item.value">
                    {{item.text}}
            </option>
        </select>
        </div>
        <span class="disabled px-2">
            {{`${selectedPage * itemsPerPage - itemsPerPage + 1}-${selectedPage * itemsPerPage} de ${this.total}`}}
        </span>
        <ul class="pagination d-inline-flex">
            <li :class="previousClasses">
                <router-link :to="{name: 'characters', params: {page: selectedPage - 1, itemsPerPage: itemsPerPage}}"
                    class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </router-link>
            </li>
            <li :class="morePrevious">
                <a class="page-link">...</a>
            </li>
            <li
                v-for="p in pages"
                :key="p"
                :class="pageClasses(p)">
                <router-link :to="{name: 'characters', params: {page: p, itemsPerPage: itemsPerPage}}"
                    class="page-link">{{p}}</router-link>
            </li>
            <li :class="moreNext">
                <a class="page-link">...</a>
            </li>
            <li :class="nextClasses">
                <router-link :to="{name: 'characters', params: {page: selectedPage + 1, itemsPerPage: itemsPerPage}}"
                    class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            total: {
                type: Number,
                require: true
            },
            selectedPage: {
                type: Number,
                require: true
            },
            itemsPerPage: {
                type: Number,
                require: true
            }
        },
        data() {
            return {
                itemsPerPageArray: [{
                    text: '10',
                    value: 10
                }, {
                    text: '20',
                    value: 20
                }, {
                    text: '50',
                    value: 50
                }],
                itemsPerPageAux: 20
            }
        },
        computed: {
            pages() {
                return Math.ceil(this.total/this.itemsPerPage);
            },
            previousClasses() {
                return 'page-item' + (this.selectedPage == 1 ? ' disabled' : '');
            },
            nextClasses() {
                return 'page-item' + (this.selectedPage == this.pages ? ' disabled' : '');
            },
            morePrevious() {
                return 'page-item disabled' + (this.selectedPage <= 3 ? ' d-none' : '');
            },
            moreNext() {
                return 'page-item disabled' + (this.selectedPage + 3 > this.pages ? ' d-none' : '');
            }
        },
        methods: {
            pageClasses(p) {
                let limitPage = 3;
                if(this.selectedPage == 1 || this.selectedPage == this.pages) {
                    limitPage = 5;
                }
                if(this.selectedPage == 2 || this.selectedPage == this.pages - 1) {
                    limitPage = 4;
                }
                return 'page-item' +
                    (this.selectedPage == p ? ' active' : '') +
                    (p <= this.selectedPage - limitPage || p >= this.selectedPage + limitPage ? ' d-none' : '');
            },
            onChangeItemsPerPage() {
                this.$router.push({name: 'characters', params: {page: this.selectedPage, itemsPerPage: this.itemsPerPageAux}});
            }
        },
        watch: {
            itemsPerPage() {
                this.itemsPerPageAux = this.itemsPerPage;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>