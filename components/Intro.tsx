'use client';
import { useEffect } from 'react';
import { Signature } from './Signature';

function finish(skipped: boolean) {
  const root = document.documentElement;
  if (root.dataset.intro === 'done') return;
  if (skipped) root.dataset.skip = '1';
  root.dataset.intro = 'done';
  window.dispatchEvent(new Event('intro-done'));
}

/** Full-screen opening: the signature draws itself, then the curtain lifts. */
export function Intro() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish(false);
      return;
    }
    const timer = window.setTimeout(() => finish(false), 5200);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') finish(true);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="intro" onClick={() => finish(true)}>
      <Signature auto delay={0.4} className="isig" />
      <button type="button" className="skip" onClick={() => finish(true)}>
        Skip
      </button>
    </div>
  );
}
