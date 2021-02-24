<template>
  <div class="Profile flex-1">
    <p>User Profile</p>
    <p>Description : {{ user.description }}</p>
    <form @submit.prevent="">
      <div class="mb-4 mt-10">
        <label class="block mb-2 text-gray-500" for="email">Description:</label>
        <textarea
          v-model="user.newDescription"
          placeholder="Insert profile description"
          class="border w-full px-2 py-1"
          type="text"
        />
        <button class="bg-green-500 text-white uppercase py-2 w-full shadow mt-2" @click="addDescription()">
          Update Descriptions
        </button>
      </div>
    </form>
    <form @submit.prevent="">
      <div class="mb-4 mt-10">
        <label class="block mb-2 text-gray-500" for="email">Video url:</label>
        <input v-model="videoUrl" class="border w-full px-2 py-1" type="text" placeholder="Insert Video Url" />
        <button class="bg-green-500 text-white uppercase py-2 w-full shadow mt-2" @click="addVideo()">Add Video</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
import 'firebase/auth'

export default {
  data() {
    return {
      user: {
        description: '',
        newDescription: '',
      },
      videoUrl: '',
    }
  },
  mounted() {
    this.getDescription()
  },
  methods: {
    getDescription() {
      const userUid = firebase.auth().currentUser.uid
      firebase
        .database()
        .ref('users/' + userUid)
        .once('value', (snapshot) => {
          if (snapshot.val().text != null) this.user.description = snapshot.val().text
        })
        .catch((error) => this.alertService.alertPopup(error))
    },
    addDescription() {
      const userUid = firebase.auth().currentUser.uid
      firebase
        .database()
        .ref('users/' + userUid)
        .set({
          user_id: userUid,
          text: this.user.newDescription,
        })
        .then(this.getDescription())
    },
    addVideo() {
      const videoId = this.$youtube.getIdFromURL(this.videoUrl)
      const userUid = firebase.auth().currentUser.uid
      const date = new Date().getTime()
      const userName = this.$store.state.user.userName
      firebase
        .database()
        .ref('videos/' + date)
        .set({
          user_id: userUid,
          user_name: userName,
          vid_id: videoId,
        })
        .then(() => {
          this.videoUrl = ''
        })
    },
  },
}
</script>

<style lang="scss">
.Profile {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  margin-top: 10%;
  margin-bottom: 10%;
  flex-direction: column;

  form {
    max-width: 50vw;
  }
}
</style>
