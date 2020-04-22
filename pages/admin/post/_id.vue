<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item :to="{ path: '/admin/list' }">
        Posts
      </el-breadcrumb-item>
      <el-breadcrumb-item> Post - {{ post.title }} </el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      label-width="120px"
      label-position="top"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Text in format .md or .html" prop="text">
        <el-input
          v-model.trim="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>

      <div class="mb">
        <small>
          <i class="el-icon-time" />
          <span>
            {{ new Date(post.date).toLocaleString() }}
          </span>
        </small>
      </div>

      <el-form-item>
        <el-button :loading="loading" type="primary" native-type="submit">
          Update
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  async asyncData({ store, params }) {
    const post = await store.dispatch('post/fetchPostById', params.id)

    return { post }
  },
  data() {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'text cant be empty', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.controls.text = this.post.text
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          const formData = {
            text: this.controls.text,
            id: this.post._id
          }

          try {
            await this.$store.dispatch('post/updatePost', formData)
            this.$message.success('Post updated')
            this.loading = false
          } catch (error) {
            this.$message.error('Post not updated')
            this.loading = false
          }
        }
      })
    }
  },
  validate({ params }) {
    return Boolean(params.id)
  },
  head() {
    return {
      title: `Post | ${this.post.title}`
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrap {
  width: 600px;
}
</style>
