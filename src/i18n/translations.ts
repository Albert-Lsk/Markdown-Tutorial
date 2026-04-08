export const translations = {
  zh: {
    // Navigation
    nav: {
      home: '首页',
      basic: '基础语法',
      extended: '扩展语法',
      editors: '编辑器',
      tools: '相关工具',
      about: '关于',
    },
    // Common
    common: {
      learnMore: '了解更多',
      startLearning: '开始学习',
      viewAll: '查看全部',
      previous: '上一页',
      next: '下一页',
      backTo: '返回',
      comments: '评论',
    },
    // Home page
    home: {
      tagline: '简洁优雅的标记语言',
      subtitle: 'Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。专注于内容本身而非排版。',
    },
    // Footer
    footer: {
      description: 'Markdown 中文教程 - 简洁高效的标记语言完整指南。帮助你快速掌握 Markdown 语法，编写优美的文档。',
      resources: '资源',
      community: '社区',
      copyright: '使用 Claude (Anthropic) 设计风格构建。',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      basic: 'Basic Syntax',
      extended: 'Extended Syntax',
      editors: 'Editors',
      tools: 'Tools',
      about: 'About',
    },
    // Common
    common: {
      learnMore: 'Learn More',
      startLearning: 'Start Learning',
      viewAll: 'View All',
      previous: 'Previous',
      next: 'Next',
      backTo: 'Back to',
      comments: 'Comments',
    },
    // Home page
    home: {
      tagline: 'The Elegant Markup Language',
      subtitle: 'Markdown is a lightweight markup language that allows you to write formatted documents using plain text. Focus on content, not formatting.',
    },
    // Footer
    footer: {
      description: 'Markdown Tutorial - A complete guide to the elegant markup language. Help you master Markdown syntax quickly and write beautiful documents.',
      resources: 'Resources',
      community: 'Community',
      copyright: 'Built with Claude (Anthropic) design style.',
    },
  },
};

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations;
