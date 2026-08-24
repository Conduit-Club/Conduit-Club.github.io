const fs = require('node:fs');
const path = require('node:path');

const updatesDirectory = path.join(__dirname, 'docs', 'updates');
const datedUpdates = fs
  .readdirSync(updatesDirectory)
  .filter((fileName) => /^\d{4}-\d{2}-\d{2}\.md$/.test(fileName))
  .sort((left, right) => right.localeCompare(left))
  .map((fileName) => `updates/${path.basename(fileName, '.md')}`);

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
        'servers/server-index',
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
        'community/shou-freshman-manual',
        'community/paper-ysm',
        'community/discord-bot',
      ],
    },
    {
      type: 'category',
      label: '更新日志',
      collapsed: false,
      items: [
        'updates/updates-index',
        ...datedUpdates,
      ],
    },
  ],
};

module.exports = sidebars;
