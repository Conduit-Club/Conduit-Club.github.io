---
id: velocity
slug: /servers/velocity
title: Velocity 代理服
sidebar_label: Velocity 代理服
sidebar_position: 1
description: Conduit Club 网络入口、后端名称与跨服命令。
---

# Velocity 代理服

Velocity 是 Conduit Club 的统一入口。

## 认证

当前 Velocity 代理服使用微软正版账户 / MUA Union / Littleskin 登录，后端服务器无需单独处理在线认证。

### 微软正版登录方式

1. 在 HMCL、PCL2 等启动器中选择微软账户登录。
2. 完成微软账户授权，并确认启动器使用的是需要进入服务器的正版档案。
3. 启动 Minecraft 1.21.1，连接潮涌核心社的公开入口。

这是默认推荐方式，不需要额外填写第三方认证服务器地址。

### MUA Union 第三方登录方式

MUA Union 用户中心：[打开用户中心](https://skin.mualliance.ltd/user)

认证服务器地址：

```text
https://skin.mualliance.ltd/api/union/yggdrasil
```

使用步骤：

1. 登录 MUA 用户中心。
2. 在用户中心打开启动器快速配置，或复制上方认证服务器地址。
3. 将配置导入 HMCL、PCL2 等启动器，并选择 MUA Union 登录。
4. 输入 MUA Union 账号，选择角色后启动 Minecraft 1.21.1。
5. 连接公开入口；进入网络后使用 `/server smp`、`/server create` 或 `/server shou` 切换。

### LittleSkin 第三方登录方式

LittleSkin 用户中心：[打开用户中心](https://littleskin.cn/user)

认证服务器地址：

```text
https://littleskin.cn/api/yggdrasil
```

使用步骤：

1. 登录 LittleSkin 用户中心。
2. 打开启动器快速配置，或在启动器中手动填写上方认证服务器地址。
3. 选择 LittleSkin 登录并输入账号，选择要使用的角色。
4. 启动 Minecraft 1.21.1，再连接公开入口。

MUA Union 与 LittleSkin 的认证地址不能混用。第三方账号默认作为独立档案进入服务器；如果需要绑定正版档案，请联系管理员处理，不要发送账号密码或 Access Token。


## 后端映射

| 后端键名 | 目标 | 连接方式 | 强制域名 |
| --- | --- | --- | --- |
| `smp` | SMP 多人生存服务器 | 通过 Velocity 转发 | `smp.moear.de` |
| `create` | Create 创造建筑服 | 通过 Velocity 转发 | `create.moear.de` |
| `shou` | 建筑展示服 | 通过 Velocity 转发 | `shou.moear.de` |

Velocity 配置中的默认尝试顺序是优先 `smp`。

## 跨服命令

从代理入口进入任意服务器后，使用后端键名切换：

```mc
/server smp
/server create
/server shou
```

查看当前可以切换的目标：

```mc
/server
```

## 代理网络场景

Velocity 是代理层，没有独立世界画面。下面展示通过代理可以进入的三个后端场景：

<div className="cc-screenshot-gallery">
  <figure>
    <img src="/img/screenshots/smp/spawn-plaza.jpg" alt="通过 Velocity 进入 SMP 生存服后的出生点场景" loading="lazy" />
    <figcaption>SMP 生存服</figcaption>
  </figure>
  <figure>
    <img src="/img/screenshots/create/spawn-statues.jpg" alt="通过 Velocity 进入 Create 创造服后的作品场景" loading="lazy" />
    <figcaption>Create 创造服</figcaption>
  </figure>
  <figure>
    <img src="/img/screenshots/shou/campus-lake.jpg" alt="通过 Velocity 进入 SHOU 建筑展示服后的校园场景" loading="lazy" />
    <figcaption>SHOU 建筑展示服</figcaption>
  </figure>
</div>
