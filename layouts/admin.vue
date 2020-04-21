<template>
  <div class="admin-layout-wrap">
    <el-container :style="{ height: '100%' }">
      <el-aside width="250px">
        <Navigation />
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navigation from '@/components/admin/Navigation'
export default {
  components: {
    Navigation
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(value) {
      this.$message.error(value.response.data.message)
    }
  },
  middleware: ['admin-auth']
}
</script>

<style lang="scss" scoped>
.admin-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>
