---
id: paper-ysm
slug: /community/paper-ysm
title: Paper-YSM
sidebar_label: Paper-YSM 插件
sidebar_position: 3
description: Paper 服务端的 Yes Steve Model 分发原型与协议研究工具。
---

# Paper-YSM

[YSM_Paper_Plugin](https://github.com/Conduit-Club/YSM_Paper_Plugin) 是 Paper 服务端的 Yes Steve Model 分发原型，用于复现 YSM 2.6.x 的握手、授权模型列表、缓存同步、模型状态和动画状态转发流程。

## 当前方向

- Paper 侧完成 YSM 2.6.x Java 层握手。
- 根据已授权的 `.ysm` 文件生成模型列表。
- 重放已验证的原生缓存材料，并同步服务端模型状态。
- 提供模型同步、状态检查和诊断命令。

## 项目信息

| 项目 | 内容 |
| --- | --- |
| 类型 | Paper 插件与协议研究工具 |
| 仓库状态 | 组织协作仓库（Fork），仍在开发与验证 |
| 构建环境 | Pixi 管理 Gradle 与 JDK 工具链 |

具体构建、测试和部署流程以仓库 README 与项目文档为准。
