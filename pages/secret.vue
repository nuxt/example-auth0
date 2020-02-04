<template>
  <div class="content">
    <img :src="user.picture"/>
    <p>Hi {{ user.email }}!</p>
    <p>This is a super secure page! Try loading this page again using the incognito/private mode of your browser.</p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    user() {
      return this.$auth.user
    }
  }
}
</script>

<style scoped>
.content {
  text-align: center;
  padding-top: 20px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin: 15px 0;
}
</style>
