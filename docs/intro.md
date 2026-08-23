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
    <h1>来自五湖四海<br /><em>归于东海之滨</em></h1>
  </div>
  <div className="cc-home-hero__media">
    <div className="cc-screenshot-carousel" data-screenshot-carousel aria-label="服务器截图轮播">
      <figure className="cc-screenshot-carousel__slide" data-active="true">
        <img src="/img/screenshots/shou/campus-lake.jpg" alt="SHOU 建筑展示服校园湖畔" />
        <figcaption className="cc-screenshot-carousel__caption">SHOU 校园湖畔</figcaption>
      </figure>
      <figure className="cc-screenshot-carousel__slide" data-active="false">
        <img src="/img/screenshots/smp/spawn-plaza.jpg" alt="SMP 生存服出生点广场" />
        <figcaption className="cc-screenshot-carousel__caption">SMP 出生点广场</figcaption>
      </figure>
      <figure className="cc-screenshot-carousel__slide" data-active="false">
        <img src="/img/screenshots/create/spawn-statues.jpg" alt="Create 创造服出生点作品" />
        <figcaption className="cc-screenshot-carousel__caption">Create 创造服作品</figcaption>
      </figure>
      <figure className="cc-screenshot-carousel__slide" data-active="false">
        <img src="/img/screenshots/smp/spawn-statues.jpg" alt="SMP 生存服出生点像素雕塑" />
        <figcaption className="cc-screenshot-carousel__caption">SMP 出生点雕塑</figcaption>
      </figure>
      <figure className="cc-screenshot-carousel__slide" data-active="false">
        <img src="/img/screenshots/smp/spawn-waterfront.jpg" alt="SMP 生存服出生点水岸景观" />
        <figcaption className="cc-screenshot-carousel__caption">SMP 水岸景观</figcaption>
      </figure>
      <figure className="cc-screenshot-carousel__slide" data-active="false">
        <img src="/img/screenshots/smp/nether-beacon.jpg" alt="SMP 生存服地狱信标区域" />
        <figcaption className="cc-screenshot-carousel__caption">SMP 地狱区域</figcaption>
      </figure>
      <figure className="cc-screenshot-carousel__slide" data-active="false">
        <img src="/img/screenshots/smp/end-beacon.jpg" alt="SMP 生存服末地信标区域" />
        <figcaption className="cc-screenshot-carousel__caption">SMP 末地区域</figcaption>
      </figure>
      <div className="cc-screenshot-carousel__controls">
        <div className="cc-screenshot-carousel__dots" aria-label="选择截图">
          <button className="cc-screenshot-carousel__dot" type="button" data-carousel-index="0" data-active="true" aria-label="显示第 1 张截图"></button>
          <button className="cc-screenshot-carousel__dot" type="button" data-carousel-index="1" data-active="false" aria-label="显示第 2 张截图"></button>
          <button className="cc-screenshot-carousel__dot" type="button" data-carousel-index="2" data-active="false" aria-label="显示第 3 张截图"></button>
          <button className="cc-screenshot-carousel__dot" type="button" data-carousel-index="3" data-active="false" aria-label="显示第 4 张截图"></button>
          <button className="cc-screenshot-carousel__dot" type="button" data-carousel-index="4" data-active="false" aria-label="显示第 5 张截图"></button>
          <button className="cc-screenshot-carousel__dot" type="button" data-carousel-index="5" data-active="false" aria-label="显示第 6 张截图"></button>
          <button className="cc-screenshot-carousel__dot" type="button" data-carousel-index="6" data-active="false" aria-label="显示第 7 张截图"></button>
        </div>
      </div>
    </div>
  </div>
</div>

## 四服入口

<div className="cc-server-grid">
  <a className="cc-server-card cc-server-card--entry" href="/velocity/">
    <span className="cc-server-card__number">01 / ENTRY</span>
    <h3>Velocity 代理服</h3>
    <p>统一入口，负责将玩家转发到三个后端世界。</p>
    <span className="cc-server-card__link">查看配置 ↗</span>
  </a>
  <a className="cc-server-card" href="/smp/">
    <span className="cc-server-card__number">02 / SURVIVAL</span>
    <h3>SMP 生存服</h3>
    <p>1.21.1 多人生存世界，</p>
    <span className="cc-server-card__link">查看说明 ↗</span>
  </a>
  <a className="cc-server-card" href="/create/">
    <span className="cc-server-card__number">03 / BUILD</span>
    <h3>Create 创造服</h3>
    <p>1.21.11 地皮建筑服,随意创建你的作品吧</p>
    <span className="cc-server-card__link">查看说明 ↗</span>
  </a>
  <a className="cc-server-card" href="/shou/">
    <span className="cc-server-card__number">04 / SHOWCASE</span>
    <h3>SHOU 建筑还原展示服</h3>
    <p>以旁观模式承载SHOU作品参观 以及携带 BlueMap 展示功能。</p>
    <span className="cc-server-card__link">查看说明 ↗</span>
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
