<template>
  <div class="SignUp">
    <div v-for="video in videos" id="videos" :key="video.vidId" class="shadow-md">
      <p>{{ video.userName }}</p>
      <youtube id="ytPlayer" :video-id="video.vidId" player-width="100%"></youtube>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
import 'firebase/auth'

export default {
  data() {
    return {
      videos: [],
    }
  },
  computed: {
    vidWidth() {
      return 600
    },
  },
  mounted() {
    this.getVideos()
  },
  methods: {
    getVideos() {
      firebase
        .database()
        .ref('videos/')
        .once('value')
        .then((snapshot) => {
          snapshot.forEach((item) => {
            this.videos.push({
              vidId: item.val().vid_id,
              userName: item.val().user_name,
            })
          })
          this.videos.reverse()
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.SignUp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #videos {
    border: 10px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    width: 90%;
    max-width: 600px;
    p {
      padding: 10px;
    }
  }
}
</style>
