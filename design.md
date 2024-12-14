# 项目设计文档

## 目录结构
.
├── src/
│ ├── app/
│ │ ├── layout.tsx # 带字体配置的根布局
│ │ ├── page.tsx # 首页组件
│ │ └── globals.css # 全局样式和 Tailwind 导入
│ ├── components/ # 共享组件目录
│ └── pages/ # 页面组件目录
├── public/ # 静态资源
├── tailwind.config.ts # Tailwind 配置
├── next.config.ts # Next.js 配置
├── tsconfig.json # TypeScript 配置
├── package.json # 项目依赖
└── postcss.config.mjs # PostCSS 配置

## 技术栈

### 核心技术
- Next.js 15.1.0
- React 19.0.0
- TypeScript 5.x
- TailwindCSS 3.4.1

### 开发工具
- ESLint
- PostCSS
- Turbopack (用于开发环境)

## 关键特性

### 样式系统
- 使用 TailwindCSS 实现 utility-first 样式
- 使用自定义主题变量定义颜色
- 使用 CSS 变量支持暗模式
- 集成 Geist 字体系列

### TypeScript 配置
- 启用严格模式
- 配置路径别名 (@/*)
- 现代 ES2017 目标
- 保留 JSX

### 性能优化
- Next.js 图片优化
- 使用 next/font 优化字体
- 使用 Turbopack 加快开发构建

### 开发体验
- 热模块替换
- TypeScript 严格类型检查
- ESLint 集成
- 路径别名简化导入

## 架构模式

### App Router 结构
- 使用 Next.js 13+ App Router
- 带元数据配置的根布局
- 使用 CSS 变量的全局样式
- 响应式设计模式

### 组件组织
- app 目录中的页面组件
- 预留共享组件结构
- 使用 Next/Image 优化图片
- 响应式设计工具类

### 配置文件
- 模块化配置文件
- 环境特定设置
- TypeScript 路径映射
- Tailwind 主题定制

## 设计决策

### 样式方案
- 选择 Tailwind 而非 CSS-in-JS
- 使用全局 CSS 变量进行主题设置
- 使用媒体查询实现暗模式
- 使用 Tailwind 断点实现响应式设计

### 类型安全
- 严格的 TypeScript 配置
- 所有组件的类型检查
- 配置文件的类型定义
- Next.js 特性的强类型支持

### 性能考虑
- 启用图片优化
- 使用 next/font 优化字体
- 使用 Turbopack 提升开发性能
- 优化模块解析

## 开发指南

### 代码组织
- 组件放在 src/components
- 页面放在 src/app 目录
- 样式放在 globals.css
- 配置文件放在根目录

### 最佳实践
- 所有新文件使用 TypeScript
- 遵循 ESLint 规则
- 实现响应式设计
- 使用 Next/Image 优化图片

本文档将随项目演进和新模式或需求的出现而更新。