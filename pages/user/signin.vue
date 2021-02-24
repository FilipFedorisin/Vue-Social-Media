<template>
  <div class="SignIn">
    <div class="p-6 w-1/4 container mx-auto shadow-md">
      <form @submit.prevent="">
        <h2 class="mb-2 text-xl text-black-800 font-bold">Sign In</h2>
        <div class="mb-4">
          <label class="block mb-2 text-gray-500" for="email">Email</label>
          <input id="email" v-model="email" class="border w-full px-2 py-1" type="text" />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-gray-500" for="password">Password</label>
          <input id="password" v-model="password" class="border w-full px-2 py-1" type="password" />
        </div>
        <p class="block mb-2 text-gray-500">
          Don't <nuxt-link to="/user/signup" class="text-blue-500">have an account</nuxt-link>?
        </p>
        <button class="bg-green-500 text-white uppercase py-2 w-full shadow" @click="userSignIn()">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    userSignIn() {
      this.$store
        .dispatch('USER_SIGN_IN_EMAIL', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/user/profile')
        })
        .catch((error) => {
          alert(error.message)
        })
    },
  },
}
</script>

<style scoped>
.SignIn {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  margin-top: 10%;
  margin-bottom: 10%;
}
.container {
  min-height: 50vh;
  display: flex;
  justify-content: center;

  align-items: center;
}
</style>
