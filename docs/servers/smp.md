---
id: smp
slug: /servers/smp
title: SMP 生存服
sidebar_label: SMP 生存服
sidebar_position: 2
description: SMP Paper 生存服务器的玩法、已核验插件和玩家命令。
---

# SMP 生存服

SMP 是潮涌核心社的多人生存世界。

## 进入方式

先连接 Velocity 入口，再从任意服务器执行：

```mc
/server smp
```

也可以在 Minecraft 多人游戏中直接填写：

```mc
smp.shoumc.com
```

当前连接请优先改用 `smp.shoumc.com`。

## 近期更新

- **2026.10.26**：CloudStorage 云仓首次开放，ImageFrame 地图画回归；EliteMobs 因使用率较低及持续报错而移除，相关精英怪、任务与商店功能不再提供。
- 支持重复开启不祥宝库，试炼大厅的同一个不祥宝库可以反复开启。

本次插件变更由运营者确认，具体版本、权限与可配置限制以实际部署为准。完整记录见 [2026.10.26 更新公告](../../updates/2026-10-26/)。历史公告保留当时状态，不代表当前插件清单。

## 功能

### CloudStorage 云仓

输入 `/cs` 打开 54 格分页大箱子，集中管理普通可堆叠材料。日常存取无需安装客户端模组。

**默认使用全服共享仓，其他玩家也能取用其中物资。** 需要独立保管时，先执行 `/cs mode personal` 切换至本人 UUID 私人仓。改名不影响私人仓归属；切换模式不会搬迁或合并库存，也不会改变已绑定接口、云潜影盒所指向的仓库。

| 命令 | 用途 |
| --- | --- |
| `/cs` | 打开当前仓库 |
| `/cs search 平滑石` | 按中文、英文或物品 ID 搜索，支持部分名称 |
| `/cs deposit` | 存入主手整组物品，可追加数量 |
| `/cs deposit all` | 批量存入背包和快捷栏中的普通材料，跳过禁存物品 |
| `/cs withdraw stone 64` | 取出 64 个石头，实际取出受库存与背包空间限制 |
| `/cs mode shared` | 切换至全服共享仓 |
| `/cs mode personal` | 切换至本人私人仓 |
| `/cs shulker` | 获取绑定当前仓库的按需取料云潜影盒 |
| `/cs shulker off` | 移除本人的云盒并释放槽位，不清空云仓 |
| `/cs port list` | 查看本人输入、输出接口及名额 |
| `/cs status` | 查看插件版本、冻结状态和待核对转移数 |

**界面操作**：左键或 Shift 点击仓库物品取一组，右键取一个；Shift 点击背包物品存入，操作前保持鼠标光标为空。下排指南针是搜索按钮，点击后在聊天输入关键词，搜索内容不会公开；右键指南针清除筛选。

**可存物品**：普通可堆叠材料。装备、工具、潜影盒、玩家头颅，以及带自定义名称、附魔、容器数据或其他特殊元数据的物品禁止新入库；批量存入会跳过，不会删除它们。旧版已入库的特殊物品仍可取出。

#### 世界输入与输出接口

普通玩家每人最多绑定 **5 个输入、5 个输出**，按 UUID 跨世界及私人、共享仓合计；切换模式不能增加名额。

1. 由本人放置木桶，在 5 格内对准它，先确认当前仓库模式。
2. 输入端执行 `/cs port input`，木桶内普通材料将送入绑定仓库。
3. 输出端先主手持有目标物品作为过滤样本，再执行 `/cs port output`；绑定不消耗样本。
4. 用 `/cs port list` 查看接口；拆除前对准木桶执行 `/cs port unbind`。

接口绑定时固定仓库与所有者，不会跟随之后的模式切换。仅处理已加载区块，所有者须在线且有相应权限；木桶窗口打开时暂停转移。私人接口限制其他玩家访问，共享接口的物理进出属于公共使用，请按共建设施管理。

#### 投影打印机取料

配套模组：[云仓适配版 litematica-printer](https://github.com/Moeary/litematica-printer-cloud/releases)。这是可选客户端组件，普通云仓界面不依赖它。

1. 将所需普通建筑材料存入目标仓库，执行 `/cs shulker`，把云盒留在主背包三排。
2. 配套打印机设置 `useQuickShulker=true`、`shulkerSource=PLUGIN`。普通旧版打印机不支持自动按需目录。
3. 模组请求当前材料后，云盒只展示所需候选物品，优先从云仓取料；缺货时再尝试实体潜影盒。
4. 背包满时会尝试把主背包中的普通非目标建筑材料存回云仓，再取目标材料；没有安全回填候选时暂停，不移动快捷栏或特殊物品。
5. 停用时执行 `/cs shulker off`；取出的真实材料仍保留，云仓数量不因关闭目录而改变。

云盒是本人绑定仓库的虚拟取料入口，不是随身携带全部库存的实体盒，请勿转交、放置或存入其他容器。打印机的精准放置能力另由服务器协议支持，云仓取料本身不保证所有复杂方块状态都能自动正确放置。

源码与进一步说明：[CloudStorage](https://github.com/Moeary/Cloud-Storage)。若出现冻结提示，请把操作时间与物品信息交给管理员核对，勿把手动解冻当作日常操作。

### ImageFrame 地图画

ImageFrame 已恢复，可将网络图片制作成地图画，用于建筑装饰和作品展示。命令格式见 [ImageFrame 官方项目](https://github.com/LOOHP/ImageFrame)。

```mc
/imageframe create <名称> <图片直链> <宽度> <高度>
/imageframe list
/imageframe get <名称>
/imageframe select
```

- 宽度、高度是地图格数，例如 `2 3` 表示 2 格宽、3 格高。
- 图片链接须能直接访问图片内容；网页分享页不能直接当作图片直链。
- `/imageframe list` 查看自己的作品，`/imageframe get <名称>` 获取已有作品的地图；`/imageframe select` 进入展示框选择流程。
- 本轮不承诺沿用旧公告的配额。创建权限、是否消耗空地图、尺寸和文件大小限制、允许的图片源及动态图支持均以当前服内配置为准。

### YSM 模型分发支持

- SMP 服务器支持 YSM 模型分发，玩家可以在客户端装上YSM 模组2.6.5 后 在服务器上使用 YSM 模型。

<div className="cc-screenshot-gallery">
  <figure>
    <img src="/img/screenshots/smp/ysm-model.jpg" alt="SMP 服务器YSM模型" loading="lazy" />
    <figcaption>SMP服务器YSM模型</figcaption>
  </figure>
</div>

- 可使用 `/ysm help` 查看 YSM 模型分发的帮助信息。

### 坐下、帽子

- 空手右键楼梯、台阶、地毯或雪层可以坐下，默认按 `Shift` 起身。
- `/hat`：将手中的物品戴到头上。

### mcmmo

- 通过 `/mcmmo` 查看技能、经验和等级。
- 利用mcmmo技能可以获得额外经验、能力和特效，具体请参考 [mcmmo 官方 Wiki](https://minecraft.fandom.com/wiki/MCMMO)。

### 粘液科技

- 粘液科技插件提供了额外的生存玩法和功能，例如自动化、机器和工具。
- 通过 `/sf` 查看粘液科技的物品、配方和功能。
- 通过 `/sf guide` 获取粘液科技的指南书。

### tp和设置家

- 通过 `/sethome {homename}` 设置家，使用 `/home {homename}` 回到家。
- 通过 `/spawn` 回到出生点。
- 通过 `/tpa <玩家>` 请求传送到其他玩家，使用 `/tpahere <玩家>` 请求其他玩家传送到自己。需要对方同意后才能传送。

## 图片展览

### 出生点

<div className="cc-screenshot-gallery">
  <figure>
    <img src="/img/screenshots/smp/spawn-plaza.jpg" alt="SMP 出生点广场与信标" loading="lazy" />
    <figcaption>出生点广场与信标景观</figcaption>
  </figure>
  <figure>
    <img src="/img/screenshots/smp/spawn-statues.jpg" alt="SMP 出生点像素雕塑与工业建筑" loading="lazy" />
    <figcaption>出生点像素雕塑与工业建筑</figcaption>
  </figure>
  <figure>
    <img src="/img/screenshots/smp/spawn-waterfront.jpg" alt="SMP 出生点水岸与建筑景观" loading="lazy" />
    <figcaption>出生点水岸景观</figcaption>
  </figure>
</div>

### 地狱

<div className="cc-screenshot-gallery">
  <figure>
    <img src="/img/screenshots/smp/nether-beacon.jpg" alt="SMP 地狱猪人塔以及其配套的收集设施+猪灵交易站" loading="lazy" />
    <figcaption>地狱猪人塔以及其配套的收集设施+猪灵交易站</figcaption>
  </figure>
</div>

### 末地

<div className="cc-screenshot-gallery">
  <figure>
    <img src="/img/screenshots/smp/end-beacon.jpg" alt="SMP 末地信标与黑曜石柱" loading="lazy" />
    <figcaption>末地信标与黑曜石柱</figcaption>
  </figure>
</div>
