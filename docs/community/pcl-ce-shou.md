---
id: pcl-ce-shou
slug: /community/pcl-ce-shou
title: SHOU-Launcher 社团启动器
sidebar_label: SHOU-Launcher 启动器
sidebar_position: 2
description: 潮涌核心社独立维护的 SHOU-Launcher，当前推荐 v1.4.0，并使用社团源下载游戏资源。
---

# SHOU-Launcher 社团启动器

[SHOU-Launcher](https://github.com/Conduit-Club/SHOU-Launcher) 是潮涌核心社独立维护的 Minecraft 启动器，曾用名 SHOU-PCL、PCL-CE-SHOU，历史上基于 PCL-CE 开发。它是独立第三方版本，保留上游作者署名与许可声明。

**当前优先推荐使用 v1.4（正式版本号 v1.4.0），并启用社团源下载游戏资源后游玩。** 本页于 2026-10-26 按运营者建议及 [v1.4.0 正式发行说明](https://github.com/Conduit-Club/SHOU-Launcher/releases/tag/v1.4.0)更新。

## 主要功能

- Microsoft、MUA Union、LittleSkin 账户管理与角色切换。
- 游戏实例管理、社团入口选择与更新日志提醒。
- 社团首页、实景轮播、主题和在线人数显示。
- 按游戏本体、Mod / 整合包、Mod Loader 分类管理下载源，可启停、排序并保存源配置。

## 当前下载与登录

- **项目仓库**：[Conduit-Club/SHOU-Launcher](https://github.com/Conduit-Club/SHOU-Launcher)
- **当前推荐下载**：[v1.4.0 · lzj](https://github.com/Conduit-Club/SHOU-Launcher/releases/tag/v1.4.0)
- **发行记录**：[全部版本](https://github.com/Conduit-Club/SHOU-Launcher/releases)

下载 Windows x64 压缩包 `SHOU-Launcher-win-x64-v1.4.0.zip`，并核对同页的 SHA-256 校验文件。解压到可写目录后运行，启动器无需另装 .NET Runtime；启动 Minecraft 仍需要 Java。

v1.4.0 发行说明已确认配置 Microsoft 公共 Client ID，可使用正版登录；也提供 MUA Union、LittleSkin 账户入口。请选择与服务器身份对应的账户和角色，具体认证方式见下方登录说明。

## 使用社团源

推荐通过启动器中的**社团镜像（社团源）**下载游戏资源，操作如下：

1. 打开 **设置 → 游戏管理 → 自定义下载源与优先级**。
2. 勾选 **使用自定义源顺序**，进入 **Minecraft 游戏本体**标签页。
3. 启用 **社团镜像**，用“上移”将其调至优先位置；保留 BMCLAPI、官方等可用来源作为回退。
4. 点击 **保存下载源设置**，再安装或补全游戏实例并启动游戏。修改列表后需要保存，才能供新下载任务使用。

Mod / 整合包与 Mod Loader 使用各自标签页的源设置，不能只调整游戏本体一栏。v1.4 浏览游戏版本时优先完整清单，社团精选清单作为备用；社团源的资源覆盖与实际可用性以当时服务为准。

社团源用于资源下载，不替代账户登录。v1.4.0 的 CurseForge 项目 Key 仍在申请，部分 Mod 或整合包下载可能受影响；建议优先使用 Modrinth 或可用镜像源，具体分发仍受作者许可与接口支持限制。

## 进入社团服务器

服务器登录和认证地址说明见 [Velocity 登录与认证说明](../../servers/velocity/)。在 Minecraft 多人游戏中添加服务器时，推荐使用新的 `smp.shoumc.com`、`create.shoumc.com` 或 `shou.shoumc.com` 入口。

## 反馈与版本变化

构建、下载和已知问题请在 GitHub 仓库查看。遇到登录失败时，请先确认启动器版本和所选认证服务，再提交问题。

## 来源与许可

上游为 [PCL-Community/PCL-CE](https://github.com/PCL-Community/PCL-CE)。项目对启动器目录与其他目录分别保留 PCL 分发有限许可、Apache License 2.0 等声明，具体范围以仓库中的许可文件为准。
