<template>
  <div>
    <h1>Posts analytics</h1>
    <AnalyicsChart
      title="Views count"
      :labels="views.labels"
      :data="views.data"
    />
    <AnalyicsChart
      title="Comments count"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>

<script>
import AnalyicsChart from '@/components/admin/AnalyticsChart'
export default {
  layout: 'admin',
  components: { AnalyicsChart },

  async asyncData({ store }) {
    const { views, comments } = await store.dispatch('post/getAnalytics')
    return { views, comments }
  }
}
</script>

<style lang="scss" scoped></style>
