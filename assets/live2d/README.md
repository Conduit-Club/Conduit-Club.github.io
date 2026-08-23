# Live2D 资源说明

当前目录存放站点右下角的嘉然 Live2D 模型，并由构建脚本自动扫描可加载的模型入口。

- 当前模型：`model/aran/aran.model3.json`、`model/diana/diana.model3.json`
- 模型由站点维护者提供；公开部署前请确认模型本身的使用授权。
- 页面运行时使用本地化的 MOC3 运行时文件，避免依赖外部 CDN。

模型文件保持各自目录内的相对引用。`generate-live2d-manifest.mjs` 会扫描 `assets/live2d/model/` 下包含 `.model3.json` 或 `.model.json` 的目录，生成 `model_list.json`；日后新增角色时，只需添加一个完整模型目录并重新执行 `pixi run start` 或 `pixi run check`。页面会在角色菜单中显示扫描到的名称。

运行时来源：<https://github.com/dogxii/live2d-widget-v3>。其中的 Live2D Cubism Core 与模型资源均需遵守各自的授权条款。
