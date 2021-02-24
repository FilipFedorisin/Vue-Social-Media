import firebase, { auth } from '~/plugins/firebase.js'
import 'firebase/auth'

export default {
  state: {
    user: '',
    userName: '',
  },
  getters: {
    USER_GET_USER: (state) => {
      return state.user
    },
    USER_GET_USERNAME: (state) => {
      return state.userName
    },
  },
  mutations: {
    USER_SET_USER: (state, payload) => {
      state.user = payload
    },
    USER_SET_USER_NAME: (state, payload) => {
      if (localStorage.getItem('user_name')) {
        state.userName = localStorage.getItem('user_name')
      } else if (payload) {
        localStorage.setItem('user_name', payload)
        state.userName = payload
      }
    },
  },
  actions: {
    async USER_SIGN_UP_EMAIL({ commit }, { email, password, userName }) {
      try {
        await auth.createUserWithEmailAndPassword(email, password)
        await auth.signInWithEmailAndPassword(email, password)
        const userUid = firebase.auth().currentUser.uid
        await firebase
          .database()
          .ref('users/' + userUid)
          .set({
            user_id: userUid,
            user_name: userName,
            text: 'none',
          })
        commit('USER_SET_USER_NAME', userName)
      } catch (error) {
        return this.alertService.alertPopup(error)
      }
    },
    async USER_SIGN_IN_EMAIL({ commit }, { email, password }) {
      try {
        await auth.signInWithEmailAndPassword(email, password)
        const userUid = firebase.auth().currentUser.uid
        await firebase
          .database()
          .ref('users/' + userUid)
          .once('value', (snapshot) => {
            if (snapshot.val().user_name != null) commit('USER_SET_USER_NAME', snapshot.val().user_name)
          })
      } catch (error) {
        return this.alertService.alertPopup(error)
      }
    },
    USER_SIGN_OUT() {
      auth.signOut().catch((error) => this.alertService.alertPopup(error))
    },
  },
}
