---
id: smp
title: SMP 生存服
sidebar_label: SMP 生存服
sidebar_position: 2
description: SMP Paper 生存服务器的玩法、已核验插件和玩家命令。
---

# SMP 生存服

SMP 是潮涌核心社的多人生存世界。

## 进入方式

先连接 Velocity 入口，再执行：

```mc
/server smp
```

## 已核验玩法配置

| 项目 | 当前值 |
| --- | --- |
| 服务端 | Paper（目录内为 `paper.jar`） |
| 游戏模式 | `survival` |
| 难度 | `hard` |
| 世界 | `world` |
| 命令方块 | 未启用 |
| 飞行 | 不允许 |
| 在线认证 | 由代理层处理；后端配置为 `online-mode=false` |

## 公告中确认的功能

### URL 地图画

服务器目录中的 `服务器更新公告-2026-07-17.md` 给出了 ImageFrame 的使用方式：

```mc
/imageframe create <名称> <图片直链> <宽度> <高度>
/imageframe list
/imageframe get <名称>
/imageframe delete <名称>
/imageframe select
```

公告同时说明：普通玩家最多创建 64 个图片项目，单幅图片最多使用 100 张地图，源文件最大 10 MiB；动态 GIF 暂不开放。

### 坐下、帽子与睡眠

- 空手右键楼梯、台阶、地毯或雪层可以坐下，默认按 `Shift` 起身。
- `/hat`：将手中的物品戴到头上。
- 当前公告说明单人入睡即可跳过夜晚。

## 已发现插件

以下列表来自 `plugins` 目录的只读枚举；带 `.disable`、`.disabled` 或 `.old` 后缀的文件不视为当前启用状态。

| 插件/组件 | 用途或文档入口 |
| --- | --- |
| `SetHome-2.0.jar` | 家点命令，见下方命令表 |
| `SimpleTpa.jar` | 玩家传送请求 |
| `GSit-3.5.1.jar` | 坐下与互动 |
| `HatCommand-1.1.jar` | `/hat` |
| `mcMMO-2.2.019.jar` | 技能、经验与排行榜 |
| `Slimefun-2025.11-release.jar` | 生存扩展内容 |
| `PaperYSM` | 模型同步；公告说明模型库已精简为 40 个模型 |
| `dc-bot-paper-bridge-0.1.0.jar` | Discord 与服务器桥接 |
| `DriveBackupV2.jar` | 世界备份 |
| `ViaVersion` / `ViaBackwards` | 版本兼容；当前目录中的对应 JAR 带禁用后缀 |

## 玩家命令

这些命令来自当前插件的 `plugin.yml` 或 2026-07-17 公告：

```mc
/sethome <名称>
/home <名称>
/delhome <名称>

/tpa <玩家>
/tpahere <玩家>
/tpaccept
/tpdeny
/tpcancel
/back

/gsit toggle
/hat
/mcstats
/mctop
/mcrank
```

`/gsit` 的别名是 `/sit`。权限、冷却和具体限制以服务器运行时配置为准；若命令返回无权限，不要通过绕过权限的方式处理。
