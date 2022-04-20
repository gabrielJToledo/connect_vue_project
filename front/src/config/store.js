import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        isMenuVisible: false,
        user: null
    },
    mutations: {
        toggleMenu(state) {
            if(!state.user) {
                state.isMenuVisible = false
                return
            }

            if(state.isMenuVisible == true) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = true
            }
        },
        setUser(state, user) {
            state.user = user
            if(user) {
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
                state.isMenuVisible = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
            }
        }
    }
})