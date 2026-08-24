---
id: shou-freshman-manual
slug: /community/shou-freshman-manual
title: SHOU Freshman 手册
sidebar_label: SHOU Freshman 手册
sidebar_position: 3
description: 水专手册（SHOU Online Manual）的建设状态、内容规划与贡献说明。
---

# SHOU Freshman 手册

:::warning Under Construction

水专手册 / SHOU Online Manual 正在建设中。目前尚未完成正式内容，也没有可公开访问的在线版本。

:::

[Conduit-Club/shou-online-og](https://github.com/Conduit-Club/shou-online-og) 是潮涌核心社维护的组织私有仓库。未加入对应 GitHub 权限组的访问者打开链接时可能看到 404 页面。

水专手册计划为上海海洋大学学生和校友提供常用信息入口、校园生活指南、服务说明与微信小程序入口。仓库负责维护网站内容以及 VuePress 构建流程，并基于“南科指南”项目 Fork 建立。

## 项目信息

| 项目 | 内容 |
| --- | --- |
| 中文名称 | 水专手册 |
| 英文名称 | SHOU Online Manual |
| 项目状态 | Under Construction |
| 仓库 | Conduit-Club 组织私有仓库 |
| 技术栈 | VuePress、Node.js 24、pnpm |
| 在线版本 | 暂无 |
| 许可证 | CC BY-SA 4.0 |

## 内容规划

当前仓库尚未完成正文。后续计划整理以下内容：

- 新生入学、学习、生活和校园设施等主题；
- 常用入口与校内服务导航；
- VuePress 站点配置、内容脚本与构建流程；
- 微信小程序入口与配套信息。

## 内容结构

```text
.
├── docs/
│   ├── about/
│   ├── calendar/
│   ├── canteen/
│   ├── contact/
│   ├── emergency/
│   ├── facility/
│   ├── life/
│   ├── miniapp/
│   ├── service/
│   ├── study/
│   └── transport/
├── instruct/
├── scripts/
├── tools/
└── package.json
```

具体目录可能随着内容建设调整，以仓库当前结构为准。

## 本地开发

组织成员取得私有仓库访问权限后，可以使用以下环境和命令参与维护。

### 环境要求

- Node.js 24
- pnpm

### 安装依赖

```bash
git clone https://github.com/Conduit-Club/shou-online-og.git
cd shou-online-og
pnpm install
```

### 常用命令

```bash
# 本地预览
pnpm run docs:dev

# 完整构建（包含脚本预处理）
pnpm run docs:build

# 快速构建
pnpm run docs:fastbuild

# 清理缓存与构建产物
pnpm run docs:clean

# 升级依赖
pnpm up
```

## 如何贡献

拥有仓库权限的成员可以直接创建分支并发起 Pull Request。需要从外部参与时，可以先联系维护者确认可公开的协作方式；代理提交渠道目前仍在设计。

如果不确定内容应放在哪个目录，可以先创建 Issue 或 Pull Request 草稿，再由维护者协助归类。

## 许可证与来源

本项目沿用原项目的共享方式，以 [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans) 许可发布。现有大部分基础内容来自原“南科指南”，修改和新增部分也应遵守署名及相同方式共享的要求；最终适用范围以仓库中的许可证文件为准。
