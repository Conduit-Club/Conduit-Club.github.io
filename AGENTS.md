# Conduit Club 站点强约束

以下规则是本仓库后续开发、内容维护和自动化修改的强约束。若任务描述与本文件冲突，以用户最新明确要求为准；除此之外不得自行放宽。

## 产品与语言

- 这是 Conduit Club 的 Minecraft 服务器中文站点。
- 所有面向玩家的界面、正文、导航、说明、更新文案必须使用简体中文；Minecraft、Velocity、SMP、Create 等产品名和命令可保留原文。
- 本项目仅维护中文版本。禁止新增语言切换、`i18n` 目录、locale 路由、双语文案、英文镜像或任何“以后再做多语言”的架构预留。
- 必须使用 Docusaurus 文档站。服务器详情、命令、素材、更新必须以 `docs/` 下可直接编辑的 Markdown 为主要内容来源；禁止用自定义静态单页替换 Docusaurus。
- 视觉调整只允许通过 Docusaurus 主题扩展和 `src/css/custom.css` 完成；不要重新实现路由、Markdown 渲染、侧栏或文档布局。
- 站点应延续文档式信息架构：首页总览、服务器详情、命令速查、素材、服务器更新；不要把四个服混成一个无边界的宣传页。
- README 只保留项目简介和公开链接；详细内容维护在 `docs/`。

## 目录结构

- `docs/` 根目录只允许保留 `intro.md`，以及 `updates/`、`servers/`、`community/` 三个内容目录；不得在根目录新增其他 Markdown 页面。
- `docs/servers/index.md` 是四服总览，独占 `/server/` 路由；Velocity、SMP、Create、SHOU 四个详情页统一放在 `docs/servers/`，对外路由固定为 `/servers/velocity/`、`/servers/smp/`、`/servers/create/`、`/servers/shou/`。
- `docs/updates/updates.md` 是更新日志总览，固定使用 `/updates/` 路由；日期更新统一放在 `docs/updates/`，文件名使用 `YYYY-MM-DD.md`，侧边栏按日期从新到旧排列。不得新增重复的 JSON 更新索引。
- 社团项目统一放在 `docs/community/`；总览和每个插件、Mod、服务或作品分别使用独立 Markdown 文件，侧边栏必须能够单独打开详情。
- 公开图片统一放在 `assets/img/`：组织图标、Logo、服务器图标和 GIF 放入 `assets/img/brand/`，实机截图按服务器放入 `assets/img/screenshots/<server>/`。不要把新图片直接堆在 `assets/img/` 根目录。
- 重命名或移动文档、图片后，必须同步更新 `sidebars.js`、`docusaurus.config.js` 和页面引用；删除素材前先确认全仓库没有有效引用。

## 服务器范围

- 服务器只允许出现以下四类：Velocity 代理服、SMP 生存服、Create 机械服、建筑展示服。
- 不得臆造第五个服、临时服、测试服或没有用户确认的服名。
- 修改插件、模组、端口、地址、在线人数、白名单、开放时间等事实前，应先对运营者提供的服务器部署资料做只读检查；只允许 dry run / 枚举 / 读取，不得启动、停止、重载、写入、删除或改变服务器状态。
- 若服务器目录不可访问，必须使用“待核验”“以实际配置为准”等明确措辞，不能用猜测填充确定事实。
- 当前 Velocity 配置中的后端键名为 `smp`、`create`、`shou`；跨服命令应以 `/server smp`、`/server create`、`/server shou` 为准。`/server showcase` 只有在配置确认存在别名后才能加入。
- 不得自行绘制服务器截图、游戏画面或伪造实机素材。优先使用已获授权的真实 `server-icon.png`、ImageFrame、BlueMap 等素材；找不到视频时保留明确的“剪辑上传位”。
- 图片、GIF、宣传视频等公开素材统一放在 `assets/`；不要恢复 `static/img` 或为没有内容的媒体类型预建空目录。

## 更新来源

- 服务器更新的权威来源是：<https://discord.com/channels/1481627208551501999/1504854748170293319>。
- 已确认的更新只写入 `docs/updates/*.md`；不得新增重复的 JSON 更新索引，也不得把推测、占位语句或未登录抓取到的内容伪装成最新公告。
- 如果无法获得 Discord 登录态，保留频道直达链接，并在页面中标明“尚未同步已确认公告”；不要捏造日期、版本号或维护内容。服务器目录中的已确认 Markdown 公告可以直接整理进 `docs/updates/`。

## 公开信息边界

- 公开 README、`docs/`、`assets/` 说明和页面文案不得包含本机绝对路径、盘符路径、内网 IP、内部端口、SSH 用户/密钥路径、Nginx/Docker 调查报告、证书私钥或控制台日志。
- 服务器部署目录、远端主机、证书文件和运维调查只用于当前任务的只读核验或受授权的运维操作，不得写入网站文档、README 或公开素材说明。
- 对外只描述连接方式、公开域名和玩家可用命令；无法公开的配置统一写成“以实际部署配置为准”。

## 运行与主题

- 环境管理必须使用 Pixi。标准启动命令必须保持为一行：`pixi run start`。
- Docusaurus 的 Node 依赖必须写入 `package.json`，Node 版本由 `pixi.toml` 管理；不得依赖未声明的全局包。
- 默认视觉必须保持苦力怕色方向：深黑/深绿背景、荧光绿主色、清晰的键盘可访问状态。
- 所有页面必须保持移动端可用，不能只验证宽屏。

## 修改与验证

- 保留与任务无关的现有修改；不得执行 `git reset --hard`、强制覆盖、删除用户文件、提交、推送或部署，除非用户明确要求。
- 修改后至少运行 `pixi run check`；涉及启动流程时还要实际运行 `pixi run start` 并请求首页、Docusaurus 资源和至少一个 Markdown 文档，确认 HTTP 成功。
- 不得为了视觉效果引入外部 CDN 字体、不可审计的远程脚本或必须联网才能显示的核心内容。
