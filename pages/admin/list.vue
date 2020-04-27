<template>
  <el-table :data="posts" style="width: 100%;">
    <el-table-column prop="_id" label="ID" />
    <el-table-column prop="title" label="Title" />
    <el-table-column label="Date">
      <template slot-scope="{ row: { date } }">
        <i class="el-icon-time" />
        <span style="margin-left: 10px;">
          {{ date | date }}
        </span>
      </template>
    </el-table-column>
    <el-table-column label="Comments">
      <template slot-scope="{ row: { comments } }">
        <i class="el-icon-s-comment" />
        <span style="margin-left: 10px;">{{ comments.length }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="views" label="Views" />
    <el-table-column label="Operations">
      <template slot-scope="{ row }">
        <el-tooltip effect="dark" content="Edit post" placement="top">
          <el-button
            circle
            icon="el-icon-edit"
            type="primary"
            @click="open(row._id)"
          />
        </el-tooltip>
        <el-tooltip effect="dark" content="Delete" placement="top">
          <el-button
            circle
            icon="el-icon-delete-solid"
            type="danger"
            @click="remove(row._id)"
          />
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetchAdminPosts')

    return { posts }
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`)
    },
    async remove(id) {
      try {
        await this.$confirm(
          `Attention! post with id ${id} will be deleted!`,
          'Delete this post?',
          {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }
        )

        await this.$store.dispatch('post/deletePost', id)
        this.posts = this.posts.filter((post) => post._id !== id)
        this.$message.success('Post deleted')
        // eslint-disable-next-line no-empty
      } catch (error) {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
