<template>
  <div class="SignUp">
    <div class="p-6 w-1/4 container mx-auto shadow-md">
      <form @submit.prevent="">
        <h2 class="mb-2 text-xl text-black-800 font-bold">Sign Up</h2>
        <div class="mb-4">
          <label class="block mb-2 text-gray-500" for="email">Email</label>
          <input v-model="email" class="border w-full px-2 py-1" type="text" />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-gray-500" for="email">User Name</label>
          <input v-model="userName" class="border w-full px-2 py-1" type="text" />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-gray-500" for="password">Password</label>
          <input v-model="password" class="border w-full px-2 py-1" type="password" />
        </div>
        <button class="bg-green-500 text-white uppercase py-2 w-full shadow" @click="userSignUp()">Sign Up</button>
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
      userName: '',
    }
  },
  methods: {
    userSignUp(err) {
      if (err) return
      this.$store
        .dispatch('USER_SIGN_UP_EMAIL', {
          email: this.email,
          password: this.password,
          userName: this.userName,
        })
        .then(() => {
          this.$router.push('/user/profile')
        })
        .catch((err) => {
          alert(err.message)
        })
    },
  },
}
</script>

<style scoped>
.SignUp {
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
