<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="12" :lg="10">
      <AppPost v-for="post in 3" :key="post" />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post'
export default {
  components: {
    AppPost
  }
}
</script>

<style lang="scss" scoped></style>
