<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="12" :lg="10">
      <AppPost v-for="post in posts" :key="post._id" :post="post" />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post'
export default {
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetchPosts')
    return { posts }
  },
  head() {
    return {
      title: 'Main page',
      meta: [
        {
          hid: 'homepage-d',
          name: 'description',
          content: 'The best blog posts'
        },
        { hid: 'homepage-k', name: 'keywords', content: 'blog' }
      ]
    }
  },
  components: {
    AppPost
  }
}
</script>

<style lang="scss" scoped></style>
