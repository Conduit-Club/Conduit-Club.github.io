---
id: intro
slug: /
title: 潮涌核心社服务器档案
sidebar_label: 首页总览
sidebar_position: 1
description: 潮涌核心社 Minecraft 四服网络的中文服务器档案入口。
---

<div className="cc-home-hero">
  <div className="cc-home-hero__copy">
    <p className="cc-kicker">CONDUIT CLUB / MINECRAFT NETWORK</p>
    <h1>四个世界，<br /><em>一条入口。</em></h1>
    <p className="cc-lede">
      这里是潮涌核心社的中文服务器档案。先了解每个服的用途，再从 Velocity 代理进入对应世界；命令、插件和更新均以已核验的服务器资料为准。
    </p>
    <div className="cc-actions">
      <a className="button button--primary" href="/velocity/">查看四服详情 <span aria-hidden="true">↗</span></a>
      <a className="button button--secondary" href="/commands/">命令速查 <span aria-hidden="true">↓</span></a>
    </div>
  </div>
  <div className="cc-home-hero__media">
    <img src="/img/smp-server-icon.png" alt="SMP 服务器图标" />
    <div>
    <span className="cc-media-label">当前服务器人数</span>
      <strong>Velocity → SMP / Create / SHOU</strong>
      <small>人数读取失败时会显示“暂不可读取”，不会伪造在线人数。</small>
    </div>
  </div>
</div>

<div className="cc-stat-grid">
  <div><strong>04</strong><span>服务节点</span></div>
  <div><strong>01</strong><span>Velocity 入口</span></div>
  <div><strong>03</strong><span>后端服务</span></div>
  <div><strong>Discord</strong><span>更新来源</span></div>
</div>

## 四服入口

<div className="cc-server-grid">
  <a className="cc-server-card cc-server-card--entry" href="/velocity/">
    <span className="cc-server-card__number">01 / ENTRY</span>
    <h3>Velocity 代理服</h3>
    <p>统一入口，负责将玩家转发到三个后端世界。</p>
    <span className="cc-server-card__link">查看入口配置 ↗</span>
  </a>
  <a className="cc-server-card" href="/smp/">
    <span className="cc-server-card__number">02 / SURVIVAL</span>
    <h3>SMP 生存服</h3>
    <p>Paper 生存世界，包含家点、传送、坐下、帽子与社区辅助功能。</p>
    <span className="cc-server-card__link">查看生存说明 ↗</span>
  </a>
  <a className="cc-server-card" href="/create/">
    <span className="cc-server-card__number">03 / BUILD</span>
    <h3>Create 创造服</h3>
    <p>Paper 创造/地皮建筑服，使用 PlotSquared、FAWE 与 CoreProtect 管理作品。</p>
    <span className="cc-server-card__link">查看建筑说明 ↗</span>
  </a>
  <a className="cc-server-card" href="/showcase/">
    <span className="cc-server-card__number">04 / SHOWCASE</span>
    <h3>建筑展示服</h3>
    <p>后端键名为 <code>shou</code>，以旁观模式承载作品参观与 BlueMap 展示。</p>
    <span className="cc-server-card__link">查看展示说明 ↗</span>
  </a>
</div>

## 连接关系

| 层级 | 配置名称 | 作用 | 进入命令 |
| --- | --- | --- | --- |
| 代理层 | `Velocity` | 统一入口与跨服转发 | 进入网络后使用 `/server ...` |
| 后端 | `smp` | 多人生存服务器 | `/server smp` |
| 后端 | `create` | 创造/地皮建筑服务器 | `/server create` |
| 后端 | `shou` | 建筑展示服务器 | `/server shou` |

:::warning 地址与权限

后端连接由代理统一管理，不等同于客户端直连地址。公网域名、白名单、权限和开放时间以实际公告为准。

:::

## 服务器更新

最近已核验的完整公告位于 [2026-07-17 更新记录](/updates/update-2026-07-17)，频道索引与 Discord 入口见[服务器更新](/updates)。

<div className="cc-update-strip">
  <span className="cc-update-strip__dot"></span>
  <div><strong>更新源：Discord 服务器更新频道</strong><small>页面内容只收录已确认的公告，不把猜测写成最新状态。</small></div>
  <a href="https://discord.com/channels/1481627208551501999/1504854748170293319" target="_blank" rel="noreferrer">打开频道 ↗</a>
</div>
