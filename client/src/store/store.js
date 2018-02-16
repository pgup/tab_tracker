import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// setToke i have  setToken ({commit}, token) kept giving error 
// Cannot read property 'data' of undefined 
// catch error Cannot read property 'data' of undefined loging.vuw page

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()]
    ,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user){
      state.user = user  
    }
  }, 
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)  
    },
    setUser ({commit}, user) {
      commit('setUser', user)  
    } 
  }
})