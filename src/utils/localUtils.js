import store from 'store'
const USER = 'user_key '
export default {
    saveUser(user) {
        store.set(USER, user)
    },
    getUser() {
        return store.get(USER) ||{}
    },
    removeUser() {
        store.remove(USER)
    }
}