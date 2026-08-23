/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  clubSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '首页总览',
    },
    {
      type: 'category',
      label: '服务器介绍',
      collapsed: false,
      items: [
        'servers/velocity',
        'servers/smp',
        'servers/create',
        'servers/shou',
      ],
    },
    {
      type: 'category',
      label: '社团资源',
      collapsed: true,
      items: [
        'community/community-index',
        'community/shou-campus',
        'community/paper-ysm',
        'community/discord-bot',
      ],
    },
    {
      type: 'category',
      label: '更新日志',
      collapsed: false,
      items: [
        'updates/update-2026-08-18',
        'updates/update-2026-07-17',
        'updates/update-2026-07-12',
        'updates/update-2026-05-15',
      ],
    },
  ],
};

module.exports = sidebars;
