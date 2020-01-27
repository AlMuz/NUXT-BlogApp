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
      <el-input v-model.trim="controls.name" />
    </el-form-item>
    <el-form-item label="Your message" prop="text">
      <el-input
        type="textarea"
        v-model.trim="controls.text"
        resize="none"
        :rows="2"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        native-type="submit">
        Add comment
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
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
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true

          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: ''
          }
          console.log(formData)
          try {
            setTimeout(() => {
              this.$emit('created')
              this.$message.success('Comment successfully added')
            }, 2000)
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
