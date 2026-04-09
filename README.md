# Markdown 教程

[English](./README_en.md)

面向真实工作流的 Markdown 教程站，重点不是背语法表，而是把 Markdown 真正用进 README、知识库、Issue、PR 和文档站。

[在线访问](https://albert-lsk.github.io/Markdown-Tutorial/)

## 这个项目现在是什么

- 中文优先的 Markdown 教程站
- 支持中英双语切换
- 提供亮色 / 暗色主题
- 内容更偏真实写作场景，而不是通用语法罗列

## 技术栈

- 框架: [Astro](https://astro.build)
- 样式: [Tailwind CSS](https://tailwindcss.com)
- 代码高亮与内容渲染: Astro 默认能力 + 自定义全局样式

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```text
src/
├── pages/
│   ├── index.astro          # 中文首页
│   ├── intro.astro          # 中文入门页
│   ├── en/                  # 英文页面
│   ├── basic/               # 基础语法
│   └── extended/            # 扩展语法
├── components/              # 公共组件
├── layouts/                 # 页面布局
├── styles/                  # 全局样式
└── i18n/                    # 国际化文案
```

## 内容入口

### 中文

- [首页](https://albert-lsk.github.io/Markdown-Tutorial/)
- [3 分钟上手](https://albert-lsk.github.io/Markdown-Tutorial/intro)
- [基础语法](https://albert-lsk.github.io/Markdown-Tutorial/basic)
- [扩展语法](https://albert-lsk.github.io/Markdown-Tutorial/extended)
- [编辑器](https://albert-lsk.github.io/Markdown-Tutorial/editors)

### English

- [Home](https://albert-lsk.github.io/Markdown-Tutorial/en/)
- [Intro](https://albert-lsk.github.io/Markdown-Tutorial/en/intro)
- [Basic Syntax](https://albert-lsk.github.io/Markdown-Tutorial/en/basic)
- [Extended Syntax](https://albert-lsk.github.io/Markdown-Tutorial/en/extended)
- [Editors](https://albert-lsk.github.io/Markdown-Tutorial/en/editors)

## 当前内容方向

- 用更真实的示例讲 Markdown，比如 README、部署说明、发布记录和任务清单
- 避免整站内容和常见 Markdown 教程站过于相似
- 让亮色模式保持浅色体系，暗色模式保持深色体系

## License

MIT
