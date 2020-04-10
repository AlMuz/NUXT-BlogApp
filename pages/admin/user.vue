<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    label-width="120px"
    label-position="top"
    @submit.native.prevent="onSubmit"
  >
    <h3>Create new user</h3>
    <el-form-item label="Username" prop="username">
      <el-input v-model.trim="controls.username" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model.trim="controls.password" type="password" />
    </el-form-item>
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
      controls: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'Username cant be empty', trigger: 'blur' }
        ],
        password: [
          {
            required: true,
            message: 'Password cant be empty',
            trigger: 'blur'
          },
          {
            min: 6,
            message: 'Password must be more than 6 simbols',
            trigger: 'blur'
          }
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
            username: this.controls.username,
            password: this.controls.password
          }

          try {
            await this.$store.dispatch('auth/createUser', formData)
            this.$message.success('New user successfully added')
            this.controls.username = ''
            this.controls.password = ''
            this.loading = false
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
form {
  width: 600px;
}
</style>
