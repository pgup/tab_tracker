import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// setToke i have  setToken ({commit}, token) kept giving error 
// Cannot read property 'data' of undefined 
// catch error Cannot read property 'data' of undefined loging.vuw page

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null
  },
  mutations: {
    setToken (state, token) {
      state.token = token    
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