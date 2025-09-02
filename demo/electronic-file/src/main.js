import Vue from "vue";
import VueCesium from "vue-cesium";
import "vue-cesium/lib/style.css";
import App from "./App.vue";

import "./assets/common.less";

import dataV from "@jiaminghi/data-view";
// import "cesium/Source/Widgets/widgets.css"; // 由vue-cesium自动处理

Vue.config.productionTip = false;
Vue.use(VueCesium, {
  // cesiumPath 是指引用的Cesium.js路径，如
  // cesiumPath: '/static/Cesium/Cesium.js'
  // 或者在线引用
  cesiumPath: "https://unpkg.com/cesium/Build/Cesium/Cesium.js",
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZGZhMWFmZi1jZjE3LTRlZGItOWQyNS05NjczMjUwNGQxZWIiLCJpZCI6ODMxNzgsImlhdCI6MTcxOTkyMjI2OX0.xNLstaQlaQLsXgWln9Ikg1KaPHPFstH7jqTKZj-R1fA",
});
Vue.use(dataV);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
