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
          {to: '/community/', label: '社团资源', position: 'left'},
          {to: '/updates/update-2026-08-18/', label: '更新日志', position: 'left'},
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
            title: '服务器档案',
            items: [
              {label: '首页总览', to: '/'},
              {label: '四服详情', to: '/velocity/'},
            ],
          },
          {
            title: '社区',
            items: [
              {label: '最新更新', to: '/updates/update-2026-08-18/'},
              {label: '社团资源', to: '/community/'},
              {
                label: 'Discord 更新频道',
                href: 'https://discord.com/channels/1481627208551501999/1504854748170293319',
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
