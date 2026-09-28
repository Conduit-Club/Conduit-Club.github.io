const {themes: prismThemes} = require('prism-react-renderer');

// 社区正式 Discord 邀请链接。
const DISCORD_INVITE_URL = 'https://discord.gg/knvDenYF5Y';
const discordInviteNavbarValue = DISCORD_INVITE_URL
  ? `<a class="cc-discord-link" href="${DISCORD_INVITE_URL}" target="_blank" rel="noreferrer">Discord 邀请链接 ↗</a>`
  : '<span class="cc-discord-pending" title="请补充正式 Discord 邀请链接">Discord 邀请链接（待补充）</span>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '潮涌核心社 · Minecraft 服务器档案',
  tagline: '四个世界，一条入口。',
  favicon: 'img/brand/velocity-server-icon.png',

  url: 'https://conduit-club.github.io',
  baseUrl: '/',
  organizationName: 'Conduit-Club',
  projectName: 'Conduit-Club.github.io',
  staticDirectories: ['assets'],

  // 站点只发布简体中文默认版本，不提供语言切换或其他 locale 路由。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        // 在构建时生成本地索引，不依赖外部搜索服务或账号。
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        language: ['zh'],
        searchBarPosition: 'left',
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/brand/conduit-club-org-icon-256.png',
      metadata: [
        {
          name: 'description',
          content: '潮涌核心社 Minecraft 四服网络的中文服务器档案、命令说明与更新记录。',
        },
      ],
      navbar: {
        title: '潮涌核心社',
        logo: {
          alt: '潮涌核心社服务器图标',
          src: 'img/brand/velocity-server-icon.png',
        },
        items: [
          {to: '/', label: '首页', position: 'left'},
          {to: '/server/', label: '服务器介绍', position: 'left'},
          {to: '/community/', label: '社团资源', position: 'left'},
          {to: '/updates/', label: '更新日志', position: 'left'},
          {type: 'search', position: 'left'},
          {
            type: 'html',
            value: '<span class="cc-velocity-navbar-status" data-velocity-status-host="smp.moear.de" data-state="loading"><span class="cc-velocity-navbar-status__label">服务器在线人数</span><strong data-velocity-count aria-live="polite">读取中…</strong></span>',
            position: 'right',
          },
          {
            type: 'html',
            value: '<button class="cc-qq-navbar-item" type="button" data-qq-group="756155087" aria-label="点击复制 QQ 群号 756155087" title="点击复制 QQ 群号"><span>QQ群</span> <code>756155087</code></button>',
            position: 'right',
          },
          {
            type: 'html',
            value: discordInviteNavbarValue,
            position: 'right',
          },
          {
            href: 'https://github.com/Conduit-Club',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '友情链接',
            items: [
              {
                label: 'Moear的个人博客',
                href: 'https://moeary.github.io/',
              },
              {
                label: 'wuhong学长的计算机复习笔记',
                href: 'https://note.peteralbus.com/',
              },
              {
                label: '水专手册',
                href: 'https://shou-online-guide.vercel.app/',
              },
            ],
          },
        ],
        copyright: '潮涌核心社 · Minecraft 服务器档案。',
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'toml', 'yaml', 'powershell'],
      },
    }),
};

module.exports = config;
