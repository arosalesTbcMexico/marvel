import services from './../../../services/services'
export default {
    async getCharacters({commit, rootState, rootGetters}) {
        try{
            commit('loader/SET_LOADING', true, {root: true});
            let response = await services.getCharacters({
                offset: rootGetters['pagination/offset'],
                limit: rootState.pagination.itemsPerPage});
            commit('SET_CHARACTERS', response.data.data);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            commit('loader/SET_LOADING', false, {root: true});
        }
    }
}