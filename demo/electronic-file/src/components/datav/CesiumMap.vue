<template>
  <div class="cesium-wrapper" style="width: 100%; height: 100%;">
    <!-- 加载状态 -->
    <div v-if="loading" class="cesium-loading">
      <div class="loading-spinner"></div>
      <p>正在加载3D地图...</p>
    </div>
    <!-- Cesium容器 -->
    <div id="cesiumContainer" :style="{ width: '100%', height: '100%', display: loading ? 'none' : 'block' }"></div>
  </div>
</template>

<script>
export default {
  name: 'CesiumMap',
  data () {
    return {
      viewer: null,
      loading: true
    }
  },
  mounted () {
    // 延迟加载Cesium以减少初始包大小
    this.$nextTick(() => {
      this.loadCesium()
    })
  },
  methods: {
    async loadCesium () {
      try {
        // 动态导入Cesium
        const Cesium = await import('cesium')

        // 创建 Cesium Viewer 实例
        const viewer = new Cesium.Viewer('cesiumContainer', {
          terrainProvider: Cesium.createWorldTerrain()
        })

        // 存储viewer实例以供后续使用
        this.viewer = viewer
        this.loading = false

        // 可以在这里添加更多的 Cesium 配置和初始化代码
      } catch (error) {
        console.error('Failed to load Cesium:', error)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.cesium-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

#cesiumContainer {
  width: 100%;
  height: 100%;
}

.cesium-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1000;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.cesium-loading p {
  color: #666;
  font-size: 14px;
  margin: 0;
}
</style>
