<template>
  <div class="left-chart-2">
    <div class="lc2-header">Defect Severity Level (SI)</div>
    <div class="lc2-details">SI Accuracy: <span>88.57%</span></div>
    <dv-charts class="lc2-chart" :option="option"/>
    <dv-decoration-2 style="height:10px;"/>
  </div>
</template>

<script>
export default {
  name: 'LeftChart2',
  data () {
    return {
      option: {
        series: [
          {
            type: 'pie',
            data: [
              { name: 'Low (SI < 0.25)', value: 4.48 },
              { name: 'Moderate (0.25 ≤ SI < 0.50)', value: 37.31 },
              { name: 'Severe (0.50 ≤ SI < 0.75)', value: 20.90 },
              { name: 'Critical (SI ≥ 0.75)', value: 31.34 }
            ],
            radius: ['45%', '65%'],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: '{percent}%\n{name}',
              style: {
                fontSize: 14,
                fill: '#fff'
              }
            }
          }
        ],
        color: ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff']
      }
    }
  }
}
</script>

<style lang="less">
.left-chart-2 {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  background-color: rgba(14, 22, 40, 0.7);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  .lc2-header {
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
    color: #ecf0f1;
    margin-bottom: 15px;
  }

  .lc2-details {
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #bdc3c7;

    span {
      color: #4cd137;
      font-weight: bold;
      font-size: 32px;
      margin-left: 10px;
    }
  }

  .lc2-chart {
    flex: 1;
    margin-top: 15px;
  }

  :deep(.dv-decoration-2) {
    margin-top: 20px;
  }
}
</style>
