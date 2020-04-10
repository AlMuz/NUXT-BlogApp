<template>
  <el-menu :style="{ height: '100%' }" :default-active="$route.path" router>
    <el-menu-item index="/admin">
      <i class="el-icon-menu" />
      <span>Analytics</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit-outline" />
      <span>Create post</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets" />
      <span>Posts</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-user-solid" />
      <span>Users</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-close" />
      <span>Logout</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
