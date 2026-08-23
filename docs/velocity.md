---
id: velocity
title: Velocity 代理服
sidebar_label: Velocity 代理服
sidebar_position: 1
description: Conduit Club 网络入口、后端名称与跨服命令。
---

# Velocity 代理服

Velocity 是 Conduit Club 的统一入口。

## 后端映射

| 后端键名 | 目标 | 连接方式 | 强制域名 |
| --- | --- | --- | --- |
| `smp` | SMP 多人生存服务器 | 通过 Velocity 转发 | `smp.moear.de` |
| `create` | Create 创造建筑服 | 通过 Velocity 转发 | `create.moear.de` |
| `shou` | 建筑展示服 | 通过 Velocity 转发 | `shou.moear.de` |

Velocity 配置中的默认尝试顺序是 `smp`。客户端应连接公开入口，再使用后端键名切换，不需要直连后端。

## 跨服命令

从代理入口进入后，使用后端键名切换：

```mc
/server smp
/server create
/server shou
```

查看当前可以切换的目标：

```mc
/server
```

:::tip 关于 `showcase`

当前 `velocity.toml` 中的真实后端键是 `shou`，没有核验到 `showcase` 别名。因此文档统一使用 `/server shou`；如果未来配置增加别名，再补充说明。

:::
