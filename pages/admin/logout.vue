<template>
  <div class="">
    <h1>Logout</h1>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  beforeCreate() {
    this.$store.dispatch('auth/logout')
    this.$router.push('/admin/login?message=logout')
  }
}
</script>

<style lang="scss" scoped></style>
