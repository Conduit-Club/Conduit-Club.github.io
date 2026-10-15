---
id: pcl-ce-shou
slug: /community/pcl-ce-shou
title: SHOU-PCL 社团启动器
sidebar_label: SHOU-PCL 启动器
sidebar_position: 2
description: 基于 PCL-CE 独立维护的 SHOU-PCL 启动器，提供 Windows x64 下载与账户、游戏实例管理说明。
---

# SHOU-PCL 社团启动器

[SHOU-PCL](https://github.com/Conduit-Club/SHOU-PCL) 是潮涌核心社基于 PCL-CE 独立维护的 Minecraft 启动器，原名 PCL-CE-SHOU。它是独立第三方版本，保留上游作者署名与许可声明。

## 主要功能

- Microsoft、MUA Union、LittleSkin 账户管理与角色切换。
- 游戏实例管理、社团入口选择与更新日志提醒。
- 社团首页、实景轮播、主题和在线人数显示。

## 当前下载与登录

- **项目仓库**：[Conduit-Club/SHOU-PCL](https://github.com/Conduit-Club/SHOU-PCL)
- **下载版本**：[最新发行版](https://github.com/Conduit-Club/SHOU-PCL/releases/latest)

截至 2026-10-15，最新公开发行版为 [v1.1.0](https://github.com/Conduit-Club/SHOU-PCL/releases/tag/v1.1.0)。Windows x64 压缩包仍名为 `PCL-CE-SHOU-win-x64.zip`，请同时查看旁置的 SHA-256 校验文件。解压到可写目录后运行，启动器无需另装 .NET Runtime；启动 Minecraft 仍需要 Java。

该发行说明已确认 LittleSkin 与 MUA 密码登录可用，账户刷新、令牌刷新、角色切换和游戏启动尚未完成全量真实服务联调。源码中的账户管理功能不代表所有登录方式均已实测，使用前请阅读对应发行说明。

服务器登录和认证地址说明见 [Velocity 登录与认证说明](../../servers/velocity/)。在 Minecraft 多人游戏中添加服务器时，推荐使用新的 `smp.shoumc.com`、`create.shoumc.com` 或 `shou.shoumc.com` 入口。

## 反馈与版本变化

构建、下载和已知问题请在 GitHub 仓库查看。遇到登录失败时，请先确认启动器版本和所选认证服务，再提交问题。

## 来源与许可

上游为 [PCL-Community/PCL-CE](https://github.com/PCL-Community/PCL-CE)。项目对启动器目录与其他目录分别保留 PCL 分发有限许可、Apache License 2.0 等声明，具体范围以仓库中的许可文件为准。
