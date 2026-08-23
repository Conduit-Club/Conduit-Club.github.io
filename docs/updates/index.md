---
id: updates-index
title: 更新日志
sidebar_label: 更新日志
sidebar_position: 1
description: Conduit Club 服务器更新索引、公告来源与同步说明。
---

# 更新日志

权威更新来源是 [Discord 服务器更新频道](https://discord.com/channels/1481627208551501999/1504854748170293319)。下方按 `YYYY.MM.DD` 从新到旧排列，最新记录始终放在最上面。

## 频道截图可见索引

以下是用户提供的 Discord 频道截图中可确认的标题和摘要；没有截图正文的部分不在这里补写推测内容。

| 日期 | 标题 | 截图中可见摘要 |
| --- | --- | --- |
| 2026.08.18 | `SHOU Conduit Club 服务器更新公告` | 完整公告已整理：多渠道登录、URL 地图画移除、假人及在线人数系统。 |
| 2026.07.17 | `SHOU Conduit Club 服务器更新` | 休闲功能、模型同步和世界备份策略更新；完整内容见本目录的 Markdown 记录。 |
| 2026.07.12 | `SHOU Conduit Club 服务器更新` | 截图中可见 SMP 与 DC Bot 互通更新、进服与退服提醒。 |
| 2026.05.15 | `SHOU Minecraft Conduit Club 服务器现状` | 截图中可见整合包服务器关闭、保留兼容原版的服务器并通过 Velocity 互联。 |

:::warning 同步边界

当前环境没有获得 Discord Chrome 登录页的可调用控制权，因此 2026.07.12、2026.05.15 这里只保留截图可见摘要；2026.08.18 已根据搬入仓库的更新正文整理。后续确认后，直接在 `docs/updates/` 新建 Markdown 文件并加入 `sidebars.js`。

:::

## 新增更新的方式

1. 从 Discord 复制已确认的标题、日期和正文。
2. 在 `docs/updates/` 新建日期命名的 `.md` 文件。
3. 只保留已确认信息，不把“正在计划”写成已上线。
4. 需要出现在左侧目录时，在 `sidebars.js` 的“服务器更新”分类加入文档 ID。
