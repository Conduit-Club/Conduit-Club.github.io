---
id: server-index
slug: /server
title: 服务器介绍
sidebar_label: 四服总览
sidebar_position: 1
description: 潮涌核心社 Velocity、SMP、Create 与 SHOU 四服网络总览。
---

# 服务器介绍

潮涌核心社维护一套由 Velocity 统一接入的 Minecraft 网络。玩家通过代理入口加入，再按需要前往生存、创造建筑或校园作品展示世界。

## 四服入口

<div className="cc-server-grid">
  <a className="cc-server-card cc-server-card--entry" href="/servers/velocity/">
    <span className="cc-server-card__number">01 / ENTRY</span>
    <h3>Velocity 代理服</h3>
    <p>统一入口，负责认证、版本兼容和三个后端世界的跨服转发。</p>
    <span className="cc-server-card__link">查看代理说明 ↗</span>
  </a>
  <a className="cc-server-card" href="/servers/smp/">
    <span className="cc-server-card__number">02 / SURVIVAL</span>
    <h3>SMP 生存服</h3>
    <p>多人长期生存世界，包含社区辅助功能、技能与扩展玩法。</p>
    <span className="cc-server-card__link">查看生存说明 ↗</span>
  </a>
  <a className="cc-server-card" href="/servers/create/">
    <span className="cc-server-card__number">03 / BUILD</span>
    <h3>Create 创造服</h3>
    <p>面向地皮建筑、创作测试和大型作品制作的创造世界。</p>
    <span className="cc-server-card__link">查看创造说明 ↗</span>
  </a>
  <a className="cc-server-card" href="/servers/shou/">
    <span className="cc-server-card__number">04 / SHOWCASE</span>
    <h3>SHOU 建筑展示服</h3>
    <p>以旁观模式承载校园还原作品，并提供 BlueMap 在线浏览。</p>
    <span className="cc-server-card__link">查看展示说明 ↗</span>
  </a>
</div>

## 连接关系

| 层级 | 配置名称 | 作用 | 进入命令 |
| --- | --- | --- | --- |
| 代理层 | `Velocity` | 统一入口、认证与跨服转发 | 加入网络后使用 `/server ...` |
| 后端 | `smp` | 多人生存世界 | `/server smp` |
| 后端 | `create` | 创造与地皮建筑世界 | `/server create` |
| 后端 | `shou` | 校园建筑展示世界 | `/server shou` |

:::warning 地址与权限

后端连接由代理统一管理，不等同于客户端直连地址。公网域名、白名单、权限和开放时间以实际公告为准。

:::

## 开始游玩

首次加入前，请先阅读 [Velocity 登录与认证说明](/servers/velocity/)。进入网络后，可以使用 `/server` 查看当前可切换的世界。
