import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'xk'
  },
  mutations: {
    changeName: function (state, newName) {
      state.name = newName;
    }
  },
  actions: {
  },
  modules: {
  }
})
