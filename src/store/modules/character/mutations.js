export default {
    SET_CHARACTERS(state, payload) {
        state.characters = payload.results;
        state.total = payload.total;
    }
}