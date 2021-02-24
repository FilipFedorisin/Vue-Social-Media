import Vuex from 'vuex'

import user from './modules/user/user'
import profile from './modules/user/profile'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      user,
      profile,
    },
  })
}

export default createStore
