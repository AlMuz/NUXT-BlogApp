<template>
  <el-card shadow="hover" :body-style="{ padding: 0 }" class="post">
    <header slot="header" class="post-header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time" />
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img
        src="https://sun9-42.userapi.com/c857424/v857424648/14ccac/em9uWu5h5Ac.jpg"
        alt="Post Image"
        class="post-image"
      />
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">
        Open
      </el-button>
      <span>
        <i class="el-icon-message" />
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 1
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 1.5rem;
}
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-image {
  width: 100%;
  height: auto;
}
.post-body {
}
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
</style>
