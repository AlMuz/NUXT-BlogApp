<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    label-width="120px"
    label-position="top"
    @submit.native.prevent="onSubmit"
  >
    <h1 class="mb">
      Create new post
    </h1>
    <el-form-item label="Post title" prop="title">
      <el-input v-model.trim="controls.title" />
    </el-form-item>

    <el-form-item label="Text in format .md or .html" prop="text">
      <el-input
        v-model="controls.text"
        type="textarea"
        resize="none"
        :rows="10"
      />
    </el-form-item>

    <el-dialog title="Text preview" :visible.sync="previewDialog">
      <div :key="controls.text.length">
        <vue-md>{{ controls.text }}</vue-md>
      </div>
    </el-dialog>

    <el-button type="success" plain class="mb" @click="previewDialog = true">
      Preview dialog
    </el-button>

    <el-form-item>
      <el-button :loading="loading" type="primary" native-type="submit">
        Create
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      loading: false,
      previewDialog: false,
      controls: {
        title: '',
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Text cant be empty', trigger: 'blur' }
        ],
        title: [
          { required: true, message: 'Title cant be empty', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          const formData = {
            text: this.controls.text,
            title: this.controls.title
          }

          try {
            await this.$store.dispatch('post/createPost', formData)
            this.controls.title = ''
            this.controls.text = ''
            this.$message.success('Post created')
            this.loading = false
          } catch (error) {
            this.$message.error('Post not created')
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 600px;
}
</style>
