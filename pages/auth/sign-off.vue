<template>
  <p>Signing off...</p>
</template>

<script>
export default {
  mounted () {
    const unsetToken = require('~/utils/auth').unsetToken
    const logout = require('~/utils/lock').logout

    unsetToken()
    logout()
  }
}
</script>
