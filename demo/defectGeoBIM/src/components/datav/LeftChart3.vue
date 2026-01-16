<template>
  <div className="left-chart-3">
    <div className="lc3-header">SOTA Model Benchmarking (mAP)</div>
    <div className="lc3-details">Top Model: <span>YOLOv9-e</span></div>
    <dv-capsule-chart className="lc3-chart" :config="config"/>
  </div>
</template>

<script>
export default {
  name: 'LeftChart3',
  data () {
    return {
      config: {
        data: [
          { name: 'YOLOv9-e', value: 83.9 },
          { name: 'Hyper-YOLO-x', value: 83.9 },
          { name: 'YOLOv8-x', value: 83.0 },
          { name: 'EMO-5M', value: 81.6 },
          { name: 'EfficientViT-M5', value: 80.0 }
        ],
        colors: ['#FF4136', '#FF851B', '#FFDC00', '#3DE7C9', '#2ECC40'],
        unit: '%'
      }
    }
  }
}
</script>

<style lang="less">
.left-chart-3 {
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;
  background-color: rgba(15, 23, 42, 0.75);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  .lc3-header {
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
    color: #e2e8f0;
    margin-bottom: 15px;
  }

  .lc3-details {
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #94a3b8;
    margin-bottom: 20px;

    span {
      color: #38bdf8;
      font-weight: bold;
      font-size: 32px;
      margin-left: 10px;
    }
  }

  .lc3-chart {
    flex: 1;

    :deep(.capsule-chart) {
      .unit {
        font-size: 14px;
        fill: #94a3b8;
      }

      .capsule-item {
        .label {
          fill: #e2e8f0;
        }

        .value {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
