---
id: showcase
title: 建筑展示服
sidebar_label: 建筑展示服
sidebar_position: 4
description: SHOU 建筑展示服的旁观参观配置与 BlueMap 入口。
---

# 建筑展示服

建筑展示服用于参观已完成的作品。

## 玩法配置

| 项目 | 当前值 |
| --- | --- |
| 服务端 | Paper（目录内为 `paper.jar`） |
| MOTD | `SHOU Campus Map | Paper 1.21.11` |
| 游戏模式 | `spectator` |
| 难度 | `peaceful` |
| 世界 | `world` |
| 飞行 | 允许 |
| 视距 / 模拟距离 | `8` / `4` |

进入方式：

```mc
/server shou
```

## 已发现插件

| 插件 | 作用 |
| --- | --- |
| `BlueMap.jar` | Web 地图与作品浏览入口 |
| `Chunky.jar` | 区块预生成 |
| `spark` | 性能分析 |

BlueMap 已部署并通过公开 HTTPS 入口提供访问；页面不记录服务器本机路径或内部部署细节。

## BlueMap 在线地图

下面嵌入 SHOU 提供的 BlueMap 页面：

<div className="cc-bluemap-frame">
  <iframe src="https://shou.moear.de/" title="SHOU BlueMap 建筑展示地图" loading="lazy" referrerPolicy="no-referrer" />
</div>

<p className="cc-embed-note">
  如果页面为空，请点击下方链接在新标签页打开；也可能是 BlueMap 的页面策略或网络访问限制导致嵌入被阻止。
</p>

<p><a href="https://shou.moear.de/" target="_blank" rel="noreferrer">在新标签页打开 BlueMap ↗</a></p>

## 参观提示

- 该服默认为旁观模式，适合浏览作品和地图，不是主要建造服。
- 建造与大范围编辑请前往 [Create 机械服](/create/)。
- 若某个作品不可见，请提供世界、坐标或作品名称给管理员，不要直接修改展示服世界文件。
