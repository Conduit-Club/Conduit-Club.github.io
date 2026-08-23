---
id: create
title: Create 创造服
sidebar_label: Create 创造服
sidebar_position: 3
description: Create 创造/地皮建筑服的配置、作品保护和常用命令。
---

# Create 创造服

Create 服是用于创造、地皮和建筑制作的 Paper 后端。

## 玩法配置

| 项目 | 当前值 |
| --- | --- |
| 服务端 | Paper（目录内为 `paper.jar`） |
| MOTD | `SHOU Build Plots | Paper 1.21.11` |
| 游戏模式 | `creative` |
| 难度 | `peaceful` |
| 世界 | `plots` |
| 飞行 | 允许 |
| 地图维度 | `plots`、`plots_nether`、`plots_the_end` |

进入方式：

```mc
/server create
```

## 已发现插件

| 插件 | 作用 |
| --- | --- |
| `PlotSquared.jar` | 地皮创建、管理与权限 |
| `FastAsyncWorldEdit.jar` | 大范围建筑编辑 |
| `CoreProtect.jar` | 方块操作记录与回滚 |
| `Multiverse-Core.jar` | 多世界管理 |
| `LuckPerms.jar` | 权限管理 |
| `ProtocolLib` | 协议兼容层 |
| `DriveBackupV2.jar` | 世界备份 |
| `PaperAccurateBlockPlacement` | 精确放置辅助 |

## 常用命令

PlotSquared 的命令根为 `/plots`，别名包括 `/p`、`/plot`、`/ps`；具体子命令由当前地皮权限决定：

```mc
/plots help
/plots claim
/plots auto
/plots home
/plots visit <玩家> [编号]
/plots trust <玩家>
/plots add <玩家>
/plots remove <玩家>
/plots delete
```

:::warning 大范围编辑

FAWE 和 CoreProtect 的管理能力可能要求权限。进行大范围操作前确认目标地皮、备份和回滚方式；不要在未确认范围时执行批量替换。

:::

CoreProtect 的命令根在插件元数据中确认为 `/co`、`/core`、`/coreprotect`，但查询参数和权限属于管理操作，玩家应优先联系管理员。
