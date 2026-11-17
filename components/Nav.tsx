'use client';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/content';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    let y0 = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setHide(y > y0 + 4 && y > 240);
        if (Math.abs(y - y0) > 4) y0 = y;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav]'));
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = (e.target as HTMLElement).dataset.nav;
          if (e.isIntersecting && id) setActive(id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`nav${hide && !open ? ' hide' : ''}`}>
        <a className="logo" href="#home" onClick={() => setOpen(false)}>
          JP
        </a>
        <nav className="links" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>
      <div id="mobile-menu" className={`mm${open ? ' open' : ''}`} aria-hidden={!open}>
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
      </div>
    </>
  );
}
