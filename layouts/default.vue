<template>
  <div>
    <Header />
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
  },
  beforeCreate() {
    this.$store.commit('USER_SET_USER_NAME')
  },
}
</script>
