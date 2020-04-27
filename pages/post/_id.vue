<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>{{ post.title }}</h1>
        <nuxt-link to="/">
          <i class="el-icon-back" />
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time" />
          {{ post.date | date }}
        </small>
        <small>
          <i class="el-icon-view" />
          {{ post.views }}
        </small>
      </div>
      <div class="post-image">
        <img :src="post.imageUrl" :alt="post.title" />
      </div>
    </header>
    <main class="post-content">
      <vue-md>{{ post.text }}</vue-md>
    </main>
    <footer>
      <CommentForm
        v-if="canAddComment"
        :post-id="post._id"
        @created="createCommentHandler"
      />

      <div v-if="post.comments.length" class="comments">
        <Comment
          v-for="comment in post.comments"
          :key="comment._id"
          :comment="comment"
        />
      </div>
      <div v-else class="text-center">
        No comments
      </div>
    </footer>
  </article>
</template>

<script>
import Comment from '@/components/main/Comment'
import CommentForm from '@/components/main/CommentForm'

export default {
  validate({ params }) {
    return Boolean(params.id)
  },
  components: {
    Comment,
    CommentForm
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch('post/fetchPostById', params.id)
    await store.dispatch('post/addView', post)

    // showing actual views count
    return { post: { ...post, views: ++post.views } }
  },
  data() {
    return {
      canAddComment: true
    }
  },
  head() {
    return {
      title: this.post.title
    }
  },
  methods: {
    createCommentHandler(comment) {
      this.post.comments.unshift(comment)
      this.canAddComment = false
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
}

.post-header {
  margin-bottom: 1.5rem;
}

.post-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.post-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.post-image img {
  width: 100%;
  height: auto;
}

.post-content {
  margin-bottom: 1rem;
}

.comments {
  margin-top: 1rem;
}
</style>
