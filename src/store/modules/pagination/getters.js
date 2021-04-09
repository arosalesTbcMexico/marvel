export default {
    offset: state => {
        return state.itemsPerPage * state.page - state.itemsPerPage;
    }
}