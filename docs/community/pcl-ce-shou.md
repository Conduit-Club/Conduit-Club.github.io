---
id: pcl-ce-shou
slug: /community/pcl-ce-shou
title: SHOU-Launcher 社团启动器
sidebar_label: SHOU-Launcher 启动器
sidebar_position: 2
description: SHOU-Launcher v1.6.4 正式版下载与升级说明，适用于 Windows x64、Windows ARM64 和 Apple 芯片 Mac。
---

# SHOU-Launcher 社团启动器

[SHOU-Launcher](https://github.com/Conduit-Club/SHOU-Launcher) 是潮涌核心社独立维护的 Minecraft 启动器，曾用名 SHOU-PCL、PCL-CE-SHOU，早期基于 PCL-CE 开发，保留上游作者署名与许可声明。

## 正式版下载

**v1.6.4** 于 2026 年 11 月 27 日正式发布，推荐日常使用。请按设备选择 ZIP 压缩包，各包的 SHA-256 可在 [GitHub 发行页](https://github.com/Conduit-Club/SHOU-Launcher/releases/tag/v1.6.4)核对。

- [下载 Windows x64 版（Intel / AMD）](https://github.com/Conduit-Club/SHOU-Launcher/releases/download/v1.6.4/SHOU-Launcher-win-x64-v1.6.4.zip)
- [下载 Windows ARM64 版](https://github.com/Conduit-Club/SHOU-Launcher/releases/download/v1.6.4/SHOU-Launcher-win-arm64-v1.6.4.zip)
- [下载 Apple 芯片 Mac 版（M 系列）](https://github.com/Conduit-Club/SHOU-Launcher/releases/download/v1.6.4/SHOU-Launcher-osx-arm64-v1.6.4.zip)

查看[全部发行记录](https://github.com/Conduit-Club/SHOU-Launcher/releases)。

## 从旧版升级

先退出旧启动器，再解压下载包。Windows 用户将新的 EXE 放回原目录。Mac 用户将 `SHOU Launcher.app` 放入「应用程序」替换旧版，首次迁移旧账户时可能需要授权钥匙串。

可以继续使用已有的游戏实例。启动器会校验并复用旧目录中的游戏文件，按需补下载。

## v1.6.4 主要变化

- 头像和皮肤在后台加载。准备游戏时仍可管理下载、切换页面或编辑设置，启动按钮会显示进度，直到 Java 进程接手。
- 支持整合包导入与导出、实例资源管理和 aria2 下载。内置下载可分段处理符合条件的大文件，并校验续传或复用的文件。
- 可在「工具 → MCP」手动开启本机服务，让支持 MCP 的助手管理实例、下载整合包、选择 Java 或检查崩溃日志。每次打开启动器时，服务默认暂停。

## 使用社团源

建议在启动器里启用**社团镜像（社团源）**下载游戏资源：

1. 打开 **设置 → 游戏管理 → 自定义下载源与优先级**。
2. 勾选 **使用自定义源顺序**，进入 **Minecraft 游戏本体**标签页。
3. 启用 **社团镜像**，用「上移」调到前面，保留 BMCLAPI、官方等可用源作为回退。
4. 下载源设置会即时保存，可继续安装或补全游戏实例。

Mod / 整合包与 Mod Loader 各自有独立的源设置标签页，不能只改游戏本体一栏。社团源只负责资源下载，不替代账户登录；具体模组与整合包分发仍受作者许可和接口限制，社团源覆盖范围以当时服务为准。

## 进入社团服务器

登录方式与第三方认证地址见 [Velocity 登录与认证说明](../../servers/velocity/)。在 Minecraft 多人游戏中添加服务器时，优先填写 `smp.shoumc.com`、`create.shoumc.com` 或 `shou.shoumc.com`。

## 反馈问题

遇到实例迁移、账号登录或启动异常时，可直接通过启动器的「反馈」页面提交，或在 GitHub 仓库查已有记录。反馈登录问题前，先确认启动器版本和当前所选认证服务。

## 来源与许可

上游为 [PCL-Community/PCL-CE](https://github.com/PCL-Community/PCL-CE)。仓库对启动器目录与其他目录分别保留 PCL 分发有限许可、Apache License 2.0 等声明，具体范围以仓库内许可文件为准。
