import api from './api'

export default {
    index() {
        return api().get('songs')
    },
    post(song) {
        return api().post('songs',song)
    }
}