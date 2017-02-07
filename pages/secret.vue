<template>
  <div class="main">
    <img :src="loggedUser.picture"/>
    <p>Hi {{ loggedUser.email }}!</p>
    <p>This is a super secure page! Try loading this page again using the incognito/private mode of your browser.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'authenticated',
  computed: mapGetters(['loggedUser'])
}
</script>

<style scoped>
.main {
  text-align: center;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin: 15px 0;
}
</style>
