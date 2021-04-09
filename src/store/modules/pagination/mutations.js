export default {
    SET_PAGINATION(state, payload) {
        if(payload.page) {
            state.page = parseInt(payload.page);
        }
        if(payload.itemsPerPage) {
            state.itemsPerPage = parseInt(payload.itemsPerPage);
        }
    }
}