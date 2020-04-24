<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    label-width="120px"
    label-position="top"
    @submit.native.prevent="onSubmit"
  >
    <h3>Add comment</h3>
    <el-form-item label="Your name" prop="name">
      <el-input v-model="controls.name" />
    </el-form-item>
    <el-form-item label="Your message" prop="text">
      <el-input
        v-model="controls.text"
        type="textarea"
        resize="none"
        :rows="2"
      />
    </el-form-item>
    <el-form-item>
      <el-button :loading="loading" type="primary" native-type="submit">
        Add comment
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          { required: true, message: 'Name cant be empty', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Text cant be empty', trigger: 'blur' }
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
            name: this.controls.name,
            text: this.controls.text,
            postId: this.postId
          }

          try {
            const newComment = await this.$store.dispatch(
              'comment/createComment',
              formData
            )
            this.$emit('created', newComment)
            this.$message.success('Comment successfully added')
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
