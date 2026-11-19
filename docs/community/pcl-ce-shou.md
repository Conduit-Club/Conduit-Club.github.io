---
id: pcl-ce-shou
slug: /community/pcl-ce-shou
title: SHOU-Launcher 社团启动器
sidebar_label: SHOU-Launcher 启动器
sidebar_position: 2
description: 潮涌核心社独立维护的 SHOU-Launcher，提供 v1.5.0 正式版与 v1.6.2 跨平台预发布版，支持社团源下载游戏资源。
---

# SHOU-Launcher 社团启动器

[SHOU-Launcher](https://github.com/Conduit-Club/SHOU-Launcher) 是潮涌核心社独立维护的 Minecraft 启动器，曾用名 SHOU-PCL、PCL-CE-SHOU，早期基于 PCL-CE 开发，保留上游作者署名与许可声明。

本页于 2026-11-19 对照 [v1.5.0 正式发行说明](https://github.com/Conduit-Club/SHOU-Launcher/releases/tag/v1.5.0)与 [v1.6.0–v1.6.2 预发布说明](https://github.com/Conduit-Club/SHOU-Launcher/releases/tag/v1.6.2)更新。

## 版本选择与下载

- **项目仓库**：[Conduit-Club/SHOU-Launcher](https://github.com/Conduit-Club/SHOU-Launcher)
- **稳定正式版（推荐日常使用）**：[v1.5.0 · wyc](https://github.com/Conduit-Club/SHOU-Launcher/releases/tag/v1.5.0)（Windows x64）
- **新版预发布（体验新功能或 Mac / ARM64 设备）**：[v1.6.2 · xb](https://github.com/Conduit-Club/SHOU-Launcher/releases/tag/v1.6.2)（Windows x64 / Windows ARM64 / Apple 芯片 Mac）
- **全部发行记录**：[Releases](https://github.com/Conduit-Club/SHOU-Launcher/releases)

### v1.5.0 正式版

发布页提供 Windows x64 压缩包 `SHOU-Launcher-win-x64-v1.5.0.zip` 及同页 `.sha256` 校验文件。解压到可写目录后直接运行，不用另装 .NET Runtime；启动 Minecraft 仍需安装 Java。

- 首页支持 Microsoft、LittleSkin、MUA Union 和离线四类账户来源计数、筛选与切换。
- 皮肤菜单新增默认关闭的「允许 3D 皮肤展示」，可预览微软正版账户皮肤与披风。
- 已接入 CurseForge 项目 API Key；Mod 查询与下载按官方优先、镜像回退处理，并尊重自定义下载源顺序。

### v1.6.2 预发布版

按设备选择对应压缩包，文件 SHA-256 可在 GitHub Release 页面直接核对（目前不提供 Intel Mac 版本）：

| 设备 | 下载文件 |
| --- | --- |
| 常规 Windows 电脑（Intel / AMD） | `SHOU-Launcher-win-x64-v1.6.2.zip` |
| Windows ARM64 设备 | `SHOU-Launcher-win-arm64-v1.6.2.zip` |
| Apple 芯片 Mac（M 系列） | `SHOU-Launcher-osx-arm64-v1.6.2.zip` |

相比正式版，v1.6.x 系列新增和改进了这些内容：

- 支持拖入整合包安装，以及检查并更新模组、资源包和光影。
- 从旧启动器导入实例时，会校验并复用已有的客户端、依赖库和资源文件，只补下载缺失或损坏的部分。
- Java 启动后继续显示初始化与等待进度，直到游戏窗口真正出现；整合包加载慢时可以先点「返回启动器」处理其他事，游戏会在后台继续拉起。

:::note 预发布与更新提示

- 更新前先退出旧启动器。Windows 解压后把新的 EXE 放回原目录，沿用原实例和同一 Windows 用户保存的账户；Apple 芯片 Mac 把解压后的 `SHOU Launcher.app` 放入「应用程序」替换旧版，首次迁移旧账户可能需要完成一次钥匙串授权。
- 预发布版仍在完善部分旧整合包和设备适配；Windows 版暂未做数字签名，Mac 版未做 Apple 公证，首次运行可能弹出系统安全提示。

:::

## 使用社团源

建议在启动器里启用**社团镜像（社团源）**下载游戏资源：

1. 打开 **设置 → 游戏管理 → 自定义下载源与优先级**。
2. 勾选 **使用自定义源顺序**，进入 **Minecraft 游戏本体**标签页。
3. 启用 **社团镜像**，用「上移」调到前面，保留 BMCLAPI、官方等可用源作为回退。
4. 点击 **保存下载源设置**，再安装或补全游戏实例（v1.6.x 中设置修改会即时保存）。

Mod / 整合包与 Mod Loader 各自有独立的源设置标签页，不能只改游戏本体一栏。社团源只负责资源下载，不替代账户登录；具体模组与整合包分发仍受作者许可和接口限制，社团源覆盖范围以当时服务为准。

## 进入社团服务器

登录方式与第三方认证地址见 [Velocity 登录与认证说明](../../servers/velocity/)。在 Minecraft 多人游戏中添加服务器时，优先填写 `smp.shoumc.com`、`create.shoumc.com` 或 `shou.shoumc.com`。

## 反馈问题

遇到实例迁移、账号登录或启动异常时，可直接通过启动器的「反馈」页面提交，或在 GitHub 仓库查已有记录。反馈登录问题前，先确认启动器版本和当前所选认证服务。

## 来源与许可

上游为 [PCL-Community/PCL-CE](https://github.com/PCL-Community/PCL-CE)。仓库对启动器目录与其他目录分别保留 PCL 分发有限许可、Apache License 2.0 等声明，具体范围以仓库内许可文件为准。
