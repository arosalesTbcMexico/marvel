import marvelApi from './marvelApi'

export default {
    getCharacters(params) {
        return marvelApi.get('characters', {params});
    },
    getComics() {
        return marvelApi.get('comics');
    }
}