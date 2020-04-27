<template>
  <div class="mb2">
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  props: {
    labels: {
      type: Array,
      default() {
        return []
      }
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    const data = {
      chartdata: {
        labels: this.labels,
        datasets: [
          {
            label: this.title,
            backgroundColor: '#f87979',
            data: this.data
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
    this.renderChart(data.chartdata, data.options)
  }
}
</script>
