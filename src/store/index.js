import Vue from 'vue'
import Vuex from 'vuex'
import character from './modules/character/store'
import loader from './modules/loader/store'
import pagination from './modules/pagination/store'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        character,
        loader,
        pagination
    }
});