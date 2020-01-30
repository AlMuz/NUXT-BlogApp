<template>
  <el-card
    shadow="always"
    :style="{width: '500px'}"
  >
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      label-width="120px"
      label-position="top"
      @submit.native.prevent="onSubmit"
    >
      <h3>Login to administrator</h3>
      <el-form-item label="Username" prop="username">
        <el-input v-model.trim="controls.username" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          v-model.trim="controls.password"
          type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          native-type="submit">
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
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
          { required: true, message: 'Password cant be empty', trigger: 'blur' },
          { min: 6, message: 'Password must be more than 6 simbols', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          const formData = {
            username: this.controls.username,
            password: this.controls.password
          }

          try {
            await this.$store.dispatch('auth/login', formData)
            this.$router.push('/admin')
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  },
  mounted () {
    const { message } = this.$route.query

    switch (message) {
      case 'login':
        this.$message.info('You must login before see something on this page')
        break
      case 'logout':
        this.$message.success('You logout successfully!')
        break
    }
  },
  layout: 'empty'
}
</script>

<style lang="scss" scoped>
</style>
