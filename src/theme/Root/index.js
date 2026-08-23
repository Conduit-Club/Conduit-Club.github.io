import React, {useEffect} from 'react';
import Root from '@theme-original/Root';

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

  return <Root>{children}</Root>;
}
