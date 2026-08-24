import React, {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';
import Root from '@theme-original/Root';

const live2DScriptLoads = new Map();
let live2DWidgetMount;
let live2DModelList;
let live2DSwitchLocked = false;

function waitForCondition(check, description, timeout = 12_000) {
  const startedAt = Date.now();
  return new Promise((resolve, reject) => {
    function inspect() {
      if (check()) {
        resolve();
        return;
      }
      if (Date.now() - startedAt >= timeout) {
        reject(new Error(`${description}等待超时`));
        return;
      }
      window.setTimeout(inspect, 50);
    }
    inspect();
  });
}

function loadLive2DScript(src, isReady) {
  if (isReady()) return Promise.resolve();
  const inFlight = live2DScriptLoads.get(src);
  if (inFlight) return inFlight;

  const load = (async () => {
    let script = document.querySelector(`script[data-conduit-live2d-script="${src}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.dataset.conduitLive2dScript = src;
      document.head.appendChild(script);
    }

    await waitForCondition(isReady, `Live2D 资源 ${src} `);
  })();

  live2DScriptLoads.set(src, load);
  load.catch(() => live2DScriptLoads.delete(src));
  return load;
}

function getLive2DModelList() {
  if (!live2DModelList) {
    live2DModelList = fetch('/live2d/model_list.json', {cache: 'no-cache'})
      .then((response) => {
        if (!response.ok) throw new Error('Live2D 模型清单读取失败');
        return response.json();
      })
      .catch((error) => {
        live2DModelList = undefined;
        throw error;
      });
  }
  return live2DModelList;
}

function resolveLive2DSelection(modelList, advance = false) {
  const groups = Array.isArray(modelList?.models) ? modelList.models : [];
  let modelId = Number.parseInt(localStorage.getItem('modelId') ?? '0', 10);
  if (!Number.isInteger(modelId) || !Array.isArray(groups[modelId]) || groups[modelId].length === 0) {
    modelId = 0;
  }

  const models = groups[modelId] ?? [];
  let textureId = Number.parseInt(localStorage.getItem('modelTexturesId') ?? '0', 10);
  if (!Number.isInteger(textureId) || textureId < 0 || textureId >= models.length) textureId = 0;

  if (advance && models.length > 1) {
    let nextTextureId = textureId;
    while (nextTextureId === textureId) {
      nextTextureId = Math.floor(Math.random() * models.length);
    }
    textureId = nextTextureId;
  }

  const directory = models[textureId];
  const name = modelList?.names?.[modelId]?.[textureId] ?? directory;
  return {modelId, textureId, directory, name};
}

function showLive2DMessage(message) {
  const tips = document.getElementById('waifu-tips');
  if (!tips) return;
  tips.textContent = message;
  tips.classList.add('waifu-tips-active');
  window.setTimeout(() => tips.classList.remove('waifu-tips-active'), 3000);
}

async function loadSelectedLive2DModel({advance = false, announce = false} = {}) {
  if (typeof window.live2d?.loadModel !== 'function') return;
  const modelList = await getLive2DModelList();
  const selection = resolveLive2DSelection(modelList, advance);
  if (!selection.directory) throw new Error('没有可用的 Live2D 模型');

  localStorage.setItem('modelId', `${selection.modelId}`);
  localStorage.setItem('modelTexturesId', `${selection.textureId}`);
  window.live2d.loadModel(`/live2d/model/${encodeURIComponent(selection.directory)}/`);
  if (announce) showLive2DMessage(`已切换为${selection.name}。`);
}

async function ensureLive2DWidget() {
  const existingWaifu = document.getElementById('waifu');
  if (existingWaifu?.querySelector('#live2d')) {
    existingWaifu.style.display = '';
    return;
  }

  if (live2DWidgetMount) return live2DWidgetMount;
  live2DWidgetMount = (async () => {
    loadLive2DStylesheet('/live2d/runtime/waifu.css');
    await loadLive2DScript('/live2d/runtime/live2dcubismcore.js', () => Boolean(window.Live2DCubismCore));
    await loadLive2DScript('/live2d/runtime/live2d-sdk.js', () => typeof window.live2d?.loadModel === 'function');
    await loadLive2DScript('/live2d/runtime/waifu-tips.js', () => typeof window.initWidget === 'function');

    const toggle = document.getElementById('waifu-toggle');
    if (!document.getElementById('waifu') && toggle) {
      toggle.click();
    } else if (!document.getElementById('waifu')) {
      localStorage.removeItem('waifu-display');
      window.initWidget({
        homePath: '/',
        waifuPath: '/live2d/runtime/waifu-tips.json',
        cdnPath: '/live2d/',
        tools: ['switch-texture'],
        dragEnable: true,
        dragDirection: ['x', 'y'],
        switchType: 'random',
      });
    }

    await waitForCondition(
      () => Boolean(document.querySelector('#waifu #live2d') && document.getElementById('waifu-tool-switch-texture')),
      'Live2D 挂件 ',
    );
    const switchTool = document.getElementById('waifu-tool-switch-texture');
    switchTool?.setAttribute('role', 'button');
    switchTool?.setAttribute('aria-label', '随机切换 Live2D 服装');
    switchTool?.setAttribute('title', '随机切换服装');
  })().finally(() => {
    live2DWidgetMount = undefined;
  });

  return live2DWidgetMount;
}

async function switchLive2DOutfit(button) {
  if (live2DSwitchLocked) return;
  live2DSwitchLocked = true;
  button.dataset.live2dSwitching = 'true';
  try {
    await loadSelectedLive2DModel({advance: true, announce: true});
    await new Promise((resolve) => window.setTimeout(resolve, 1200));
  } catch (error) {
    console.warn('[Live2D] 换装失败。', error);
    showLive2DMessage('换装失败，请稍后重试。');
  } finally {
    live2DSwitchLocked = false;
    delete button.dataset.live2dSwitching;
  }
}

function handleLive2DSwitch(event) {
  const button = event.target instanceof Element
    ? event.target.closest('#waifu-tool-switch-texture')
    : null;
  if (!button) return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  switchLive2DOutfit(button);
}

function loadLive2DStylesheet(href) {
  if (document.querySelector(`link[data-conduit-live2d-style="${href}"]`)) return;
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = href;
  stylesheet.dataset.conduitLive2dStyle = href;
  document.head.appendChild(stylesheet);
}

export default function RootWrapper({children}) {
  const {pathname} = useLocation();

  useEffect(() => {
    async function copyGroupNumber(event) {
      const button = event.target.closest('[data-qq-group]');
      if (!button) return;
      const number = button.dataset.qqGroup;
      const original = button.innerHTML;
      try {
        await navigator.clipboard.writeText(number);
      } catch {
        const input = document.createElement('textarea');
        input.value = number;
        input.setAttribute('readonly', '');
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
      }
      button.innerHTML = '<span>已复制</span> <code>756155087</code>';
      button.classList.add('is-copied');
      window.setTimeout(() => {
        button.innerHTML = original;
        button.classList.remove('is-copied');
      }, 1500);
    }

    document.addEventListener('click', copyGroupNumber);
    return () => document.removeEventListener('click', copyGroupNumber);
  }, []);

  useEffect(() => {
    const statusRoots = Array.from(document.querySelectorAll('[data-velocity-status-host]'));
    if (statusRoots.length === 0) return undefined;

    const host = statusRoots[0].getAttribute('data-velocity-status-host');
    let cancelled = false;
    let timer;

    async function updateVelocityCount() {
      if (!host) return;
      statusRoots.forEach((statusRoot) => {
        statusRoot.dataset.state = 'loading';
        const countNode = statusRoot.querySelector('[data-velocity-count]');
        if (countNode) countNode.textContent = '读取中…';
      });

      try {
        const response = await fetch(
          `https://api.mcstatus.io/v2/status/java/${encodeURIComponent(host)}?query=false`,
        );
        if (!response.ok) throw new Error('status request failed');
        const payload = await response.json();
        const online = Number(payload?.players?.online);
        const maximum = Number(payload?.players?.max);
        if (!payload?.online || !Number.isFinite(online)) {
          throw new Error('status payload unavailable');
        }
        if (cancelled) return;
        statusRoots.forEach((statusRoot) => {
          statusRoot.dataset.state = 'online';
          const countNode = statusRoot.querySelector('[data-velocity-count]');
          if (countNode) countNode.textContent = `${online} / ${Number.isFinite(maximum) ? maximum : '—'}`;
        });
      } catch {
        if (cancelled) return;
        statusRoots.forEach((statusRoot) => {
          statusRoot.dataset.state = 'offline';
          const countNode = statusRoot.querySelector('[data-velocity-count]');
          if (countNode) countNode.textContent = '—';
        });
      }

      if (!cancelled) timer = window.setTimeout(updateVelocityCount, 60_000);
    }

    updateVelocityCount();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const instances = new Map();

    function mountCarousels() {
      for (const [carousel, cleanup] of instances) {
        if (!carousel.isConnected) {
          cleanup();
          instances.delete(carousel);
        }
      }

      document.querySelectorAll('[data-screenshot-carousel]').forEach((carousel) => {
        if (instances.has(carousel)) return;
        const slides = Array.from(carousel.querySelectorAll('.cc-screenshot-carousel__slide'));
        const dots = Array.from(carousel.querySelectorAll('[data-carousel-index]'));
        const nextButton = carousel.querySelector('[data-carousel-next]');
        if (slides.length < 2) return;

        let currentIndex = slides.findIndex((slide) => slide.dataset.active === 'true');
        if (currentIndex < 0) currentIndex = 0;

        function showSlide(index) {
          currentIndex = (index + slides.length) % slides.length;
          slides.forEach((slide, slideIndex) => {
            slide.dataset.active = `${slideIndex === currentIndex}`;
          });
          dots.forEach((dot, dotIndex) => {
            dot.dataset.active = `${dotIndex === currentIndex}`;
          });
        }

        const goNext = () => showSlide(currentIndex + 1);
        const interval = window.setInterval(goNext, 7000);
        const dotHandlers = dots.map((dot) => {
          const handler = () => showSlide(Number(dot.dataset.carouselIndex));
          dot.addEventListener('click', handler);
          return [dot, handler];
        });
        nextButton?.addEventListener('click', goNext);
        showSlide(currentIndex);

        instances.set(carousel, () => {
          window.clearInterval(interval);
          dotHandlers.forEach(([dot, handler]) => dot.removeEventListener('click', handler));
          nextButton?.removeEventListener('click', goNext);
        });
      });
    }

    const observer = new MutationObserver(mountCarousels);
    mountCarousels();
    observer.observe(document.body, {childList: true, subtree: true});

    return () => {
      observer.disconnect();
      instances.forEach((cleanup) => cleanup());
      instances.clear();
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleLive2DSwitch, true);
    return () => document.removeEventListener('click', handleLive2DSwitch, true);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let recoveryTimer;

    ensureLive2DWidget()
      .then(() => {
        if (cancelled) return;
        recoveryTimer = window.setTimeout(() => {
          if (cancelled) return;
          loadSelectedLive2DModel().catch((error) => {
            console.warn('[Live2D] 切页后恢复角色失败。', error);
          });
        }, 700);
      })
      .catch((error) => {
        console.warn('[Live2D] 角色加载失败，网站其余内容不受影响。', error);
      });

    return () => {
      cancelled = true;
      window.clearTimeout(recoveryTimer);
    };
  }, [pathname]);

  return <Root>{children}</Root>;
}
