# DefectGPT Software 🛠️

一个基于Vue.js开发的智能缺陷检测和可视化分析平台，集成了先进的AI技术用于工业缺陷识别与分析。

## 🚀 核心功能

### 智能缺陷检测
- **AI驱动分析**: 利用GPT模型进行缺陷自动识别和分类
- **实时处理**: 支持实时图像/视频流缺陷检测
- **高精度识别**: 提供高准确率的缺陷定位和特征提取

### 数据可视化
- **3D地图集成**: 基于Cesium的地理信息可视化
- **多维数据图表**: 丰富的图表组件展示分析结果
- **交互式界面**: 用户友好的操作界面和实时反馈

### 工业应用场景
- **电子元件检测**: PCB板、芯片等电子元件的缺陷分析
- **质量控制**: 生产线自动化质量检测
- **维护预警**: 设备状态监测和预测性维护

## 🛠️ 技术栈

- **前端框架**: Vue.js 2.6.10
- **3D可视化**: Cesium 1.119.0
- **数据可视化**: @jiaminghi/data-view
- **构建工具**: Vue CLI 3.11.0
- **部署平台**: Vercel

## 📋 环境要求

- Node.js >= 12.0.0
- npm >= 6.0.0 或 yarn >= 1.22.0

## 🔧 安装与运行

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 开发环境运行
```bash
npm run dev
# 或
yarn run dev
```

### 生产环境构建
```bash
npm run build
# 或
yarn run build
```

### 代码检查
```bash
npm run lint
# 或
yarn run lint
```

## 📁 项目结构

```
src/
├── components/
│   └── datav/          # 数据可视化组件
│       ├── CesiumMap.vue      # 3D地图组件
│       ├── CenterCmp.vue      # 中心控制面板
│       ├── BottomCharts.vue   # 底部图表组件
│       └── ...
├── assets/             # 静态资源
├── main.js            # 应用入口文件
└── App.vue            # 根组件

public/                 # 公共资源
dist/                   # 构建输出目录
```

## 🌐 部署

项目已配置为支持Vercel自动部署：

1. 代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 自动构建和部署

## 📊 主要组件

- **CesiumMap**: 基于Cesium的3D地理信息展示
- **DataView**: 多维度数据可视化图表
- **CenterCmp**: 中央控制面板，集成AI分析功能
- **Chart Components**: 各种专业图表展示组件

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 📄 许可证

本项目采用MIT许可证。

