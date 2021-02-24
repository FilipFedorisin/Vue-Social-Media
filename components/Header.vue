<template>
  <div class="py-2 shadow">
    <div id="Navbar" class="container mx-auto flex justify-between items-center">
      <nuxt-link to="/" class="leading-tight font-bold text-black-500 text-2xl">You Share</nuxt-link>
      <div>
        <span v-if="$store.state.user.user">
          <Nuxt-link to="/user/profile">{{ $store.state.user.userName }}</Nuxt-link>
        </span>
        <nuxt-link v-else to="/user/signin" class="opacity-50 hover:opacity-100">Sign In</nuxt-link>
        <button v-if="$store.state.user.user" class="pl-4 opacity-50 hover:opacity-100" @click="signOut()">
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signOut(err) {
      if (err) return
      this.$store.dispatch('USER_SIGN_OUT').catch((err) => {
        alert(err.message)
      })
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss">
#Navbar {
  max-width: 90%;
}
</style>
