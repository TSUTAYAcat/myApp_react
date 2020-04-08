import store from 'store'
const USER = 'user_key '
export default {
    saveUser(user) {
        store.set(USER, user)
    },
    getUser(user) {
        return store.get(USER) ||{}
    },
    removeUser(user) {
        store.remove(USER)
    }
}