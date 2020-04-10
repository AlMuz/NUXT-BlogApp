<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin/list' }">
        Posts
      </el-breadcrumb-item>
      <el-breadcrumb-item> Post - {{ $route.params.id }} </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  layout: 'admin'
}
</script>
