<template>
  <div class="app">
    <fork-this/>
    <div class="main">
      <navbar/>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import ForkThis from '~/components/ForkThis'

export default {
  components: {
    Navbar,
    ForkThis
  }
}
</script>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
}
.main {
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
}
</style>
