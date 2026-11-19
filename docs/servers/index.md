---
id: server-index
slug: /server
title: 服务器介绍
sidebar_label: 服务器总览
sidebar_position: 1
description: 潮涌核心社 Minecraft 四服网络与 Terraria 社区服的总览及连接入口。
---

# 服务器介绍

潮涌核心社目前维护一套由 Velocity 统一接入的 Minecraft 四服网络，另外独立运行一个 Terraria（泰拉瑞亚）原版社区服。

## 服务器入口

<div className="cc-server-grid">
  <a className="cc-server-card cc-server-card--entry" href="/servers/velocity/">
    <span className="cc-server-card__number">01 / ENTRY</span>
    <h3>Velocity 代理服</h3>
    <p>Minecraft 统一入口，负责认证、版本兼容和三个后端世界的跨服转发。</p>
    <span className="cc-server-card__link">查看代理说明 ↗</span>
  </a>
  <a className="cc-server-card" href="/servers/smp/">
    <span className="cc-server-card__number">02 / SURVIVAL</span>
    <h3>SMP 生存服</h3>
    <p>多人长期生存世界，包含云仓、地图画、技能与扩展玩法。</p>
    <span className="cc-server-card__link">查看生存说明 ↗</span>
  </a>
  <a className="cc-server-card" href="/servers/create/">
    <span className="cc-server-card__number">03 / BUILD</span>
    <h3>Create 创造建筑服</h3>
    <p>面向地皮建筑、创作测试和大型作品制作的创造世界。</p>
    <span className="cc-server-card__link">查看创造说明 ↗</span>
  </a>
  <a className="cc-server-card" href="/servers/shou/">
    <span className="cc-server-card__number">04 / SHOWCASE</span>
    <h3>SHOU 建筑展示服</h3>
    <p>以旁观模式承载校园还原作品，并提供 BlueMap 在线浏览。</p>
    <span className="cc-server-card__link">查看展示说明 ↗</span>
  </a>
  <a className="cc-server-card cc-server-card--wide" href="/servers/tr/">
    <span className="cc-server-card__number">05 / TERRARIA</span>
    <h3>Terraria 社区服</h3>
    <p>独立运行的 Terraria 原版社区服（TShock），支持 1.4.5.8 联机开荒、传送、圈地与留言墙。</p>
    <span className="cc-server-card__link">查看 TR 服插件与命令 ↗</span>
  </a>
</div>

## 推荐连接地址

连接 Minecraft 服务器时请优先使用 `shoumc.com` 下的对应入口；Terraria 社区服独立直连，不经过 Velocity：

| 服务器 | 推荐地址 | 切换或接入方式 |
| --- | --- | --- |
| SMP 生存服 | `smp.shoumc.com` | 进服后可用 `/server smp` |
| Create 创造建筑服 | `create.shoumc.com` | 进服后可用 `/server create` |
| SHOU 建筑展示服 | `shou.shoumc.com` | 进服后可用 `/server shou` |
| Terraria 社区服 | `tr.shoumc.com`（端口 `7777`） | Terraria 原版客户端直连，无需共用进服密码 |

## Minecraft 连接关系

| 层级 | 配置名称 | 作用 | 进入命令 |
| --- | --- | --- | --- |
| 代理层 | `Velocity` | 统一入口、认证与跨服转发 | 加入网络后使用 `/server ...` |
| 后端 | `smp` | 多人生存世界 | `/server smp` |
| 后端 | `create` | 创造与地皮建筑世界 | `/server create` |
| 后端 | `shou` | 校园建筑展示世界 | `/server shou` |

:::warning 地址与权限

Minecraft 后端连接由 Velocity 统一管理，不等同于客户端直连地址；Terraria 社区服单独运行在 `tr.shoumc.com:7777`，首次进入需在聊天栏注册并登录 TShock 账户。以上是当前确认的公开入口，白名单、权限与开放状态以实际配置和公告为准。

:::

## 开始游玩

- 加入 Minecraft 网络前，请先阅读 [Velocity 登录与认证说明](/servers/velocity/)；进服后可用 `/server` 查看当前可切换的世界。
- 加入 Terraria 社区服前，请查看 [Terraria 社区服说明](/servers/tr/) 了解进服步骤、插件列表与常用命令。
