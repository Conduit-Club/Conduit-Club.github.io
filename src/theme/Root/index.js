import React, {useEffect} from 'react';
import Root from '@theme-original/Root';

function loadLive2DScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-conduit-live2d-script="${src}"]`);
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.conduitLive2dScript = src;
    script.addEventListener('load', resolve, {once: true});
    script.addEventListener('error', () => reject(new Error(`Live2D 资源加载失败：${src}`)), {once: true});
    document.head.appendChild(script);
  });
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
    let cancelled = false;

    async function mountLive2D() {
      try {
        if (cancelled) return;

        loadLive2DStylesheet('/live2d/runtime/waifu.css');
        await loadLive2DScript('/live2d/runtime/live2dcubismcore.js');
        await loadLive2DScript('/live2d/runtime/live2d-sdk.js');
        await loadLive2DScript('/live2d/runtime/waifu-tips.js');
        if (cancelled || typeof window.initWidget !== 'function') return;

        window.initWidget({
          homePath: '/',
          waifuPath: '/live2d/runtime/waifu-tips.json',
          cdnPath: '/live2d/',
          tools: ['switch-texture'],
          dragEnable: true,
          dragDirection: ['x', 'y'],
          switchType: 'random',
        });
      } catch (error) {
        console.warn('[Live2D] 角色加载失败，网站其余内容不受影响。', error);
      }
    }

    mountLive2D();
    return () => {
      cancelled = true;
      document.getElementById('waifu')?.remove();
      document.getElementById('waifu-toggle')?.remove();
    };
  }, []);

  return <Root>{children}</Root>;
}
