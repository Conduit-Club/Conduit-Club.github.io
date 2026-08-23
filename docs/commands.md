---
id: commands
title: 命令速查
sidebar_label: 命令速查
sidebar_position: 1
description: Conduit Club Velocity、SMP、Create 与展示服的中文命令索引。
---

# 命令速查

命令分为代理层和后端服两类。先确认自己在哪一层，再执行对应命令；所有权限、冷却和插件开关以服务器运行时返回为准。

## 跨服

在 Velocity 入口使用真实后端键名：

```mc
/server
/server smp
/server create
/server shou
```

| 命令 | 作用 |
| --- | --- |
| `/server` | 查看可切换的后端 |
| `/server smp` | 进入 SMP 生存服 |
| `/server create` | 进入 Create 机械服 |
| `/server shou` | 进入建筑展示服 |

## SMP 生存服

### 家点与传送

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
```

### 休闲功能

```mc
/gsit toggle
/sit toggle
/hat
```

空手右键楼梯、台阶、地毯或雪层可坐下；默认按 `Shift` 起身。

### ImageFrame 地图画

```mc
/imageframe create <名称> <图片直链> <宽度> <高度>
/imageframe list
/imageframe get <名称>
/imageframe delete <名称>
/imageframe select
```

### mcMMO

```mc
/mcstats
/mctop
/mcrank
/inspect <玩家>
/party
/partychat
```

## Create 机械服

PlotSquared 的命令根为 `/plots`，也可以使用 `/p`：

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

## 建筑展示服

```mc
/server shou
```