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
          console.log('valid')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
