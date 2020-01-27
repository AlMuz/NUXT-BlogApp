<template>
  <el-card class="comment">
    <div class="comment-header">
      <span>Person name</span>
      <span>
        <i class="el-icon-time" />
        {{ new Date().toLocaleString() }}
      </span>
    </div>
    <div class="comment-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </el-card>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style lang="scss" scoped>
.comment {
  margin-bottom: 1rem;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;

}
.comment-text {
  white-space: pre-line;
}
</style>
