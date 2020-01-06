<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">ERROR 404</h1>
      <nuxt-link to="/">
        Back to the main page
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .error-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .error-content {
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .error-title {
    color: red;
    margin-bottom: 1rem;
  }
</style>
