<template>
  <div class="bottom-charts">
    <div class="bc-chart-item">
      <div class="bcci-header">Overall Defects Distribution</div>
      <dv-active-ring-chart :config="config1" />
      <Label-Tag :config="labelConfig" />
    </div>
    <dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">North Façade Defects</div>
      <dv-active-ring-chart :config="config2" />
      <Label-Tag :config="labelConfig" />
    </div>

    <dv-decoration-2 class="decoration-2" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">East Façade Defects</div>
      <dv-active-ring-chart :config="config3" />
      <Label-Tag :config="labelConfig" />
    </div>

    <dv-decoration-2 class="decoration-3" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">South Façade Defects</div>
      <dv-active-ring-chart :config="config4" />
      <Label-Tag :config="labelConfig" />
    </div>

  </div>
</template>

<script>
import LabelTag from './LabelTag'

export default {
  name: 'BottomCharts',
  components: {
    LabelTag
  },
  data () {
    return {
      config1: {
        data: [
          {
            name: 'Cracks',
            value: 356
          },
          {
            name: 'Spalling',
            value: 215
          },
          {
            name: 'Moisture',
            value: 90
          },
          {
            name: 'Other',
            value: 317
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config2: {
        data: [
          {
            name: 'Cracks',
            value: 615
          },
          {
            name: 'Spalling',
            value: 322
          },
          {
            name: 'Moisture',
            value: 198
          },
          {
            name: 'Other',
            value: 80
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config3: {
        data: [
          {
            name: 'Cracks',
            value: 452
          },
          {
            name: 'Spalling',
            value: 512
          },
          {
            name: 'Moisture',
            value: 333
          },
          {
            name: 'Other',
            value: 255
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config4: {
        data: [
          {
            name: 'Cracks',
            value: 156
          },
          {
            name: 'Spalling',
            value: 415
          },
          {
            name: 'Moisture',
            value: 90
          },
          {
            name: 'Other',
            value: 210
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      labelConfig: {
        data: ['Cracks', 'Spalling', 'Moisture', 'Other']
      }
    }
  }
}
</script>

<style lang="less">
.bottom-charts {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  .bc-chart-item {
    width: 25%;
    height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
  }

  .bcci-header {
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
  }

  .dv-active-ring-chart {
    height: calc(~"100% - 80px");
  }

  .label-tag {
    height: 30px;
  }

  .active-ring-name {
    font-size: 18px !important;
  }

  .decoration-1, .decoration-2, .decoration-3 {
    display: absolute;
    left: 0%;
  }
}
</style>
