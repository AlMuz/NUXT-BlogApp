<template>
  <el-menu :style="{ height: '100%' }" :default-active="$route.path" router>
    <el-menu-item index="/admin">
      <i class="el-icon-menu" />
      <span>Analytics</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-copy-document" />
        <span>Posts</span>
      </template>
      <el-menu-item index="/admin/posts/">
        <i class="el-icon-tickets" />
        <span>All posts</span>
      </el-menu-item>
      <el-menu-item index="/admin/posts/create">
        <i class="el-icon-edit-outline" />
        <span>Create post</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="/admin/user">
      <i class="el-icon-user-solid" />
      <span>Users</span>
    </el-menu-item>
    <el-menu-item index="/">
      <i class="el-icon-arrow-left" />
      <span>On the main page</span>
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
