import React, { useEffect, useState } from 'react';
import { Icon } from './Icons';

/** Legacy fallback for browsers (or contexts) where the async Clipboard API is unavailable. */
function legacyCopy(value) {
  const el = document.createElement('textarea');
  el.value = value;
  el.setAttribute('readonly', '');
  el.style.position = 'fixed';
  el.style.opacity = '0';
  document.body.appendChild(el);
  el.select();
  let ok;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }
  document.body.removeChild(el);
  return ok;
}

export default function CopyButton({ value, label = 'Copy' }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    let ok;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        ok = true;
      } catch {
        ok = legacyCopy(value);
      }
    } else {
      ok = legacyCopy(value);
    }
    setCopied(ok);
  };

  return (
    <button type="button" className={`copy-btn${copied ? ' is-copied' : ''}`} onClick={copy} aria-live="polite">
      <Icon name={copied ? 'check' : 'copy'} />
      {copied ? 'Copied' : label}
    </button>
  );
}
