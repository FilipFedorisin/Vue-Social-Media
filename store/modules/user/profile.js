//! this is not working!!!

/*

import firebase from '~/plugins/firebase.js'
import 'firebase/auth'

export default {
  state: {
    description: '',
  },
  getters: {
    GET_USER_PROFILE: (state) => {
      return state.description
    },
  },
  actions: {
    USER_GET_DESCRIPTION({ commit }) {
      const userUid = firebase.auth().currentUser.uid
      firebase
        .database()
        .ref('users/' + userUid)
        .on('value', (snapshot) => {
          commit('SET_DESCRIPTION', snapshot.val().text)
        })
    },
    USER_SIGN_UP({ commit }, { email, password }) {},
  },
  mutations: {
    SET_DESCRIPTION: (state, payload) => {
      state.description = payload
    },
  },
}

*/
