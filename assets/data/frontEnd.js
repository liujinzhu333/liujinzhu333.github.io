var frontEnd = [
  {
    title: "Internet",
    name: "互联网",
    status: 1,
    children: [
      {
        title: "How does the internet work?",
        name: "互联网是如何工作的？",
        status: 1,
        grade: 1,
        children: [],
      },
      {
        title: "What is HTTP?",
        name: "什么是HTTP？",
        status: 1,
        grade: 1,
        children: [],
      },
      {
        title: "What is Domain Name?",
        name: "什么是域名？",
        status: 0,
        grade: 1,
        children: [],
      },
      {
        title: "What is hosting?",
        name: "什么是托管？",
        status: 0,
        grade: 1,
        children: [],
      },
      {
        title: "DNS and how it works?",
        name: "DNS是什么？它是如何工作的？",
        status: 0,
        grade: 1,
        children: [],
      },
      {
        title: "Browsers and how they work?",
        name: "浏览器是什么？它们是如何工作的？",
        status: 0,
        grade: 1,
        children: [],
      },
    ],
  },
  {
    title: "HTML",
    name: "HTML",
    status: 0,
    children: [
      {
        title: "Learn the basics",
        name: "学习HTML基础",
        status: 0,
        grade: 1,
        children: [],
      },
      {
        title: "Writing Semantic HTML",
        name: "编写语义化HTML",
        status: 0,
        grade: 1,
        children: [],
      },
      {
        title: "Forms and Validations",
        name: "表单和验证",
        status: 0,
        grade: 1,
        children: [],
      },
      {
        title: "Accessibility",
        name: "可访问性",
        status: 0,
        grade: 1,
        children: [],
      },
      {
        title: "SEO Basics",
        name: "SEO基础",
        status: 0,
        grade: 3,
        children: [],
      },
    ],
  },
  {
    title: "CSS",
    name: "CSS",
    status: 0,
    children: [
      {
        title: "Learn the basics",
        name: "学习CSS基础",
        status: 0,
        grade: 1,
        children: [],
      },
      {
        title: "Making Layouts",
        name: "设计布局",
        status: 0,
        grade: 1,
        children: [],
      },
      {
        title: "Responsive Design",
        name: "响应式设计",
        status: 0,
        grade: 1,
        children: [],
      },
    ],
  },
  {
    title: "JavaScript",
    name: "JavaScript",
    status: 0,
    children: [
      {
        title: "Fetch API / Ajax (XHR)",
        name: "Fetch API / Ajax (XHR)",
        status: 0,
        children: [],
      },
      {
        title: "Learn DOM Manipulation",
        name: "学习DOM操作",
        status: 0,
        children: [],
      },
      {
        title: "Learn the Basics",
        name: "学习JavaScript基础",
        status: 0,
        children: [],
      },
    ],
  },
  {
    title: "Version Control Systems",
    name: "版本控制系统",
    status: 0,
    children: [
      { title: "Git", name: "Git", status: 0, grade: 1, children: [] },
    ],
  },
  {
    title: "VCS Hosting",
    name: "版本控制托管",
    status: 0,
    children: [
      { title: "GitHub", name: "GitHub", status: 0, grade: 1, children: [] },
      { title: "GitLab", name: "GitLab", status: 0, grade: 2, children: [] },
      {
        title: "Bitbucket",
        name: "Bitbucket",
        status: 0,
        grade: 2,
        children: [],
      },
    ],
  },
  {
    title: "Package Managers",
    name: "包管理器",
    status: 0,
    children: [
      { title: "npm", name: "npm", status: 0, grade: 1, children: [] },
      { title: "yarn", name: "yarn", status: 0, grade: 1, children: [] },
      { title: "pnpm", name: "pnpm", status: 0, grade: 2, children: [] },
    ],
  },
  {
    title: "Pick a Framework",
    name: "选择一个框架",
    status: 0,
    children: [
      { title: "React", name: "React", status: 0, grade: 1, children: [] },
      { title: "Vue.js", name: "Vue.js", status: 0, grade: 1, children: [] },
      { title: "Angular", name: "Angular", status: 0, grade: 2, children: [] },
      { title: "Svelte", name: "Svelte", status: 0, grade: 2, children: [] },
      {
        title: "Solid JS",
        name: "Solid JS",
        status: 0,
        grade: 2,
        children: [],
      },
      { title: "Qwik", name: "Qwik", status: 0, grade: 2, children: [] },
    ],
  },
  {
    title: "Writing CSS",
    name: "编写CSS",
    status: 0,
    children: [
      {
        title: "Tailwind",
        name: "Tailwind",
        status: 0,
        grade: 1,
        children: [],
      },
    ],
  },
  {
    title: "CSS Architecture",
    name: "CSS架构",
    status: 0,
    children: [
      { title: "BEM", name: "BEM", status: 0, grade: 3, children: [] },
    ],
  },
  {
    title: "CSS Preprocessors",
    name: "CSS预处理器",
    status: 0,
    children: [
      { title: "Sass", name: "Sass", status: 0, grade: 3, children: [] },
      { title: "PostCSS", name: "PostCSS", status: 0, grade: 3, children: [] },
    ],
  },
  {
    title: "Build Tools",
    name: "构建工具",
    status: 0,
    children: [
      {
        title: "Linters and Formatters",
        name: "代码检查与格式化",
        status: 0,
        children: [
          {
            title: "Prettier",
            name: "Prettier",
            status: 0,
            grade: 1,
            children: [],
          },
          {
            title: "ESLint",
            name: "ESLint",
            status: 0,
            grade: 1,
            children: [],
          },
        ],
      },
      {
        title: "Module Bundlers",
        name: "模块打包器",
        status: 0,
        children: [
          { title: "Vite", name: "Vite", status: 0, grade: 1, children: [] },
          {
            title: "esbuild",
            name: "esbuild",
            status: 0,
            grade: 1,
            children: [],
          },
          {
            title: "Webpack",
            name: "Webpack",
            status: 0,
            grade: 1,
            children: [],
          },
          { title: "SWC", name: "SWC", status: 0, grade: 2, children: [] },
          {
            title: "Rollup",
            name: "Rollup",
            status: 0,
            grade: 2,
            children: [],
          },
          {
            title: "Parcel",
            name: "Parcel",
            status: 0,
            grade: 2,
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: "Testing",
    name: "测试",
    status: 0,
    children: [
      { title: "Vitest", name: "Vitest", status: 0, grade: 1, children: [] },
      { title: "Jest", name: "Jest", status: 0, grade: 2, children: [] },
      {
        title: "Playwright",
        name: "Playwright",
        status: 0,
        grade: 1,
        children: [],
      },
      { title: "Cypress", name: "Cypress", status: 0, grade: 2, children: [] },
    ],
  },
  {
    title: "Authentication Strategies",
    name: "认证策略",
    status: 0,
    children: [
      { status: 0, name: "JWT", title: "JWT", children: [] },
      { status: 0, name: "OAuth", title: "OAuth", children: [] },
      { status: 0, name: "SSO", title: "SSO", children: [] },
      { status: 0, name: "Basic Auth", title: "Basic Auth", children: [] },
      { status: 0, name: "Session Auth", title: "Session Auth", children: [] },
    ],
  },
  {
    title: "Web Security Basics",
    name: "Web安全基础",
    status: 0,
    children: [
      { title: "CORS", name: "CORS", status: 0, grade: 1, children: [] },
      { title: "HTTPS", name: "HTTPS", status: 0, grade: 1, children: [] },
      {
        title: "Content Security Policy",
        name: "内容安全策略",
        status: 0,
        grade: 1,
        children: [],
      },
      {
        title: "OWASP Security Risks",
        name: "OWASP安全风险",
        status: 0,
        grade: 1,
        children: [],
      },
    ],
  },
  {
    title: "Web Components",
    name: "Web组件",
    status: 0,
    children: [
      {
        title: "HTML Templates",
        name: "HTML模板",
        status: 0,
        grade: 3,
        children: [],
      },
      {
        title: "Custom Elements",
        name: "自定义元素",
        status: 0,
        grade: 3,
        children: [],
      },
      {
        title: "Shadow DOM",
        name: "影子DOM",
        status: 0,
        grade: 3,
        children: [],
      },
    ],
  },
  {
    title: "Type Checkers",
    name: "类型检查器",
    status: 0,
    children: [
      {
        title: "TypeScript",
        name: "TypeScript",
        status: 0,
        grade: 1,
        children: [],
      },
    ],
  },
  {
    title: "SSR",
    name: "服务器端渲染",
    status: 0,
    children: [
      {
        title: "React",
        name: "React",
        status: 0,
        grade: 1,
        children: [
          {
            title: "Next.js",
            name: "Next.js",
            status: 0,
            grade: 1,
            children: [],
          },
          { title: "Astro", name: "Astro", status: 0, grade: 1, children: [] },
          {
            title: "react-router",
            name: "react-router",
            status: 0,
            grade: 1,
            children: [],
          },
        ],
      },
      { title: "Angular", name: "Angular", status: 0, grade: 2, children: [] },
      {
        title: "Vue.js",
        name: "Vue.js",
        status: 0,
        grade: 2,
        children: [
          {
            title: "Nuxt.js",
            name: "Nuxt.js",
            status: 0,
            grade: 2,
            children: [],
          },
        ],
      },
      {
        title: "Svelte",
        name: "Svelte",
        status: 0,
        grade: 2,
        children: [
          {
            title: "Svelte Kit",
            name: "Svelte Kit",
            status: 0,
            grade: 2,
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: "GraphQL",
    name: "GraphQL",
    status: 0,
    grade: 1,
    children: [
      { title: "Apollo", name: "Apollo", status: 0, grade: 1, children: [] },
      {
        title: "Relay Modern",
        name: "Relay Modern",
        status: 0,
        grade: 2,
        children: [],
      },
    ],
  },
  {
    title: "PWAs",
    name: "渐进式Web应用",
    status: 0,
    grade: 3,
    children: [
      {
        title: "Using DevTools",
        name: "使用DevTools",
        status: 0,
        children: [],
      },
      { title: "Storage", name: "存储", status: 0, children: [] },
      { title: "PRPL Pattern", name: "PRPL模式", status: 0, children: [] },
      { title: "RAIL Model", name: "RAIL模型", status: 0, children: [] },
      {
        title: "Performance Metrics",
        name: "性能指标",
        status: 0,
        children: [],
      },
      {
        title: "Using Lighthouse",
        name: "使用Lighthouse",
        status: 0,
        children: [],
      },
      { title: "Web Sockets", name: "Web Sockets", status: 0, children: [] },
      {
        title: "Server Sent Events",
        name: "服务器发送事件",
        status: 0,
        children: [],
      },
      { title: "Service Workers", name: "服务工作者", status: 0, children: [] },
      { title: "Location", name: "位置", status: 0, children: [] },
      { title: "Notifications", name: "通知", status: 0, children: [] },
      {
        title: "Device Orientation",
        name: "设备方向",
        status: 0,
        children: [],
      },
      { title: "Payments", name: "支付", status: 0, children: [] },
      { title: "Credentials", name: "凭证", status: 0, children: [] },
    ],
  },
  {
    title: "Static Site Generators",
    name: "静态站点生成器",
    status: 0,
    children: [
      { title: "Next.js", name: "Next.js", status: 0, grade: 2, children: [] },
      { title: "Astro", name: "Astro", status: 0, grade: 1, children: [] },
      {
        title: "Vuepress",
        name: "Vuepress",
        status: 0,
        grade: 2,
        children: [],
      },
      {
        title: "Eleventy",
        name: "Eleventy",
        status: 0,
        grade: 2,
        children: [],
      },
      { title: "Nuxt.js", name: "Nuxt.js", status: 0, grade: 2, children: [] },
    ],
  },
  {
    title: "Mobile Apps",
    name: "移动应用",
    status: 0,
    grade: 3,
    children: [
      {
        title: "React Native",
        name: "React Native",
        status: 0,
        grade: 1,
        children: [],
      },
      { title: "Flutter", name: "Flutter", status: 0, grade: 2, children: [] },
      { title: "Ionic", name: "Ionic", status: 0, grade: 2, children: [] },
    ],
  },
  {
    title: "Desktop Apps",
    name: "桌面应用",
    status: 0,
    children: [
      {
        title: "Electron",
        name: "Electron",
        status: 0,
        grade: 1,
        children: [],
      },
      { title: "Tauri", name: "Tauri", status: 0, grade: 1, children: [] },
      { title: "Flutter", name: "Flutter", status: 0, grade: 2, children: [] },
    ],
  },
];
